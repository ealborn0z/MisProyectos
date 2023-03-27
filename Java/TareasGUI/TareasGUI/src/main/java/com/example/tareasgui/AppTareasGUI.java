package com.example.tareasgui;

import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.ArrayList;

public class AppTareasGUI {
    private JFrame frame;
    private JPanel panel;
    private JList<String> listaTareas;
    private DefaultListModel<String> modeloLista;
    private JTextField campoTarea;
    private JButton botonAgregar;
    private JButton botonEditar;
    private JButton botonEliminar;

    private ArrayList<String> tareas;

    public AppTareasGUI() {
        tareas = new ArrayList<>();
        modeloLista = new DefaultListModel<>();
        listaTareas = new JList<>(modeloLista);
        campoTarea = new JTextField(20);
        botonAgregar = new JButton("Agregar");
        botonEditar = new JButton("Editar");
        botonEliminar = new JButton("Eliminar");

        frame = new JFrame("Lista de Tareas");
        panel = new JPanel();
        panel.setLayout(new BorderLayout());

        JScrollPane scrollPane = new JScrollPane(listaTareas);
        panel.add(scrollPane, BorderLayout.CENTER);

        JPanel panelBotones = new JPanel();
        panelBotones.add(campoTarea);
        panelBotones.add(botonAgregar);
        panelBotones.add(botonEditar);
        panelBotones.add(botonEliminar);
        panel.add(panelBotones, BorderLayout.SOUTH);

        frame.add(panel);
        frame.pack();
        frame.setVisible(true);

        botonAgregar.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                String nuevaTarea = campoTarea.getText();
                if (!nuevaTarea.isEmpty()) {
                    tareas.add(nuevaTarea);
                    modeloLista.addElement(nuevaTarea);
                    campoTarea.setText("");
                }
            }
        });

        botonEditar.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                int indice = listaTareas.getSelectedIndex();
                if (indice != -1) {
                    String nuevaTarea = JOptionPane.showInputDialog(frame, "Editar tarea", tareas.get(indice));
                    if (!nuevaTarea.isEmpty()) {
                        tareas.set(indice, nuevaTarea);
                        modeloLista.setElementAt(nuevaTarea, indice);
                    }
                }
            }
        });

        botonEliminar.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                int indice = listaTareas.getSelectedIndex();
                if (indice != -1) {
                    tareas.remove(indice);
                    modeloLista.remove(indice);
                }
            }
        });
    }

    public static void main(String[] args) {
        new AppTareasGUI();
    }
}

