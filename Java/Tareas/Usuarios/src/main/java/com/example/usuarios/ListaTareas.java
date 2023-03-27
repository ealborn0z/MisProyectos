package com.example.usuarios;

import java.util.ArrayList;

public class ListaTareas {
    private ArrayList<Tarea> tareas;

    public ListaTareas() {
        this.tareas = new ArrayList<Tarea>();
    }

    public void agregarTarea(Tarea tarea) {
        this.tareas.add(tarea);
    }

    public void eliminarTarea(int indice) {
        this.tareas.remove(indice);
    }

    public void editarTarea(int indice, String nombre, String descripcion) {
        Tarea tarea = this.tareas.get(indice);
        tarea.setNombre(nombre);
        tarea.setDescripcion(descripcion);
    }

    public void marcarComoCompletado(int indice) {
        Tarea tarea = this.tareas.get(indice);
        tarea.setCompletado(true);
    }

    // Getters y setters para el ArrayList de tareas


    public ArrayList<Tarea> getTareas() {
        return tareas;
    }

    public void setTareas(ArrayList<Tarea> tareas) {
        this.tareas = tareas;
    }
}
