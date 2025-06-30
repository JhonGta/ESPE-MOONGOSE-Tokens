import React, { useEffect, useState } from "react";
import api from "../services/api";

export default function CourseCRUD() {
  const [courses, setCourses] = useState([]);
  const [form, setForm] = useState({ title: "", description: "" });
  const [editingId, setEditingId] = useState(null);

  const fetchCourses = async () => {
    const { data } = await api.get("/course");
    setCourses(data);
  };

  useEffect(() => { fetchCourses(); }, []);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (editingId) {
      await api.put(`/course/${editingId}`, form);
    } else {
      await api.post("/course", form);
    }
    setForm({ title: "", description: "" });
    setEditingId(null);
    fetchCourses();
  };

  const handleEdit = course => {
    setForm({ title: course.title, description: course.description });
    setEditingId(course._id);
  };

  const handleDelete = async id => {
    await api.delete(`/course/${id}`);
    fetchCourses();
  };

  return (
    <div style={{
      maxWidth: 600,
      margin: '40px auto',
      background: '#fff',
      borderRadius: 16,
      boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
      padding: 32
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginBottom: 24 }}>
        <img src="https://srvcas.espe.edu.ec/authenticationendpoint/images/Espe-Angular-Logo.png" alt="ESPE Logo" style={{ width: 110 }} />
        <h2 style={{ color: '#1b5e20', margin: 0, fontSize: 28 }}>CRUD de Cursos - ESPE</h2>
      </div>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 24 }}>
        <input name="title" value={form.title} onChange={handleChange} placeholder="Nombre del curso" required style={{ padding: 10, borderRadius: 6, border: '1px solid #ccc', fontSize: 16 }} />
        <input name="description" value={form.description} onChange={handleChange} placeholder="Descripción" required style={{ padding: 10, borderRadius: 6, border: '1px solid #ccc', fontSize: 16 }} />
        <button type="submit" style={{ background: '#1b5e20', color: '#fff', border: 'none', borderRadius: 6, padding: 12, fontWeight: 'bold', fontSize: 16, cursor: 'pointer' }}>{editingId ? "Actualizar" : "Crear"}</button>
        {editingId && <button type="button" onClick={() => { setEditingId(null); setForm({ title: "", description: "" }); }} style={{ background: '#b71c1c', color: '#fff', border: 'none', borderRadius: 6, padding: 12, fontWeight: 'bold', fontSize: 16, cursor: 'pointer' }}>Cancelar</button>}
      </form>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {courses.map(course => (
          <li key={course._id} style={{ background: '#f1f8e9', borderRadius: 8, marginBottom: 12, padding: 16, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <b style={{ color: '#1b5e20', fontSize: 18 }}>{course.title}</b>
              <div style={{ color: '#333', fontSize: 15 }}>{course.description}</div>
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <button onClick={() => handleEdit(course)} style={{ background: '#388e3c', color: '#fff', border: 'none', borderRadius: 6, padding: '6px 12px', fontWeight: 'bold', cursor: 'pointer' }}>Editar</button>
              <button onClick={() => handleDelete(course._id)} style={{ background: '#b71c1c', color: '#fff', border: 'none', borderRadius: 6, padding: '6px 12px', fontWeight: 'bold', cursor: 'pointer' }}>Eliminar</button>
            </div>
          </li>
        ))}
      </ul>
      {/* <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 24 }}>
        <button onClick={() => { localStorage.removeItem('token'); window.location.reload(); }} style={{ background: 'linear-gradient(90deg, #b71c1c 60%, #d32f2f 100%)', color: '#fff', border: 'none', borderRadius: 8, padding: '12px 28px', fontWeight: 'bold', fontSize: 16, cursor: 'pointer', boxShadow: '0 2px 8px #b71c1c40', letterSpacing: 1 }}>Cerrar sesión</button>
      </div> */}
    </div>
  );
}
