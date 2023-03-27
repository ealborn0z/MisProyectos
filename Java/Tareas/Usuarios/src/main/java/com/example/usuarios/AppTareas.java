package com.example.usuarios;

import java.util.ArrayList;
import java.util.Scanner;

public class AppTareas {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        ArrayList<String> tareas = new ArrayList<>();

        while (true) {
            System.out.println("\n--- Lista de Tareas ---");
            System.out.println("1. Ver tareas");
            System.out.println("2. Agregar tarea");
            System.out.println("3. Editar tarea");
            System.out.println("4. Marcar tarea como completada");
            System.out.println("5. Eliminar tarea");
            System.out.println("6. Salir");
            System.out.print("Ingrese una opción: ");

            int opcion = scanner.nextInt();

            switch (opcion) {
                case 1:
                    System.out.println("\n--- Tareas ---");
                    if (tareas.isEmpty()) {
                        System.out.println("No hay tareas en la lista.");
                    } else {
                        for (int i = 0; i < tareas.size(); i++) {
                            System.out.println((i+1) + ". " + tareas.get(i));
                        }
                    }
                    break;
                case 2:
                    scanner.nextLine(); // limpiar el buffer de entrada
                    System.out.print("\nIngrese la tarea: ");
                    String tarea = scanner.nextLine();
                    tareas.add(tarea);
                    System.out.println("La tarea se ha agregado correctamente.");
                    break;
                case 3:
                    System.out.print("\nIngrese el número de tarea a editar: ");
                    int indiceEditar = scanner.nextInt();
                    scanner.nextLine(); // limpiar el buffer de entrada
                    System.out.print("Ingrese la nueva tarea: ");
                    String nuevaTarea = scanner.nextLine();
                    tareas.set(indiceEditar-1, nuevaTarea);
                    System.out.println("La tarea se ha editado correctamente.");
                    break;
                case 4:
                    System.out.print("\nIngrese el número de tarea a marcar como completada: ");
                    int indiceCompletada = scanner.nextInt();
                    tareas.remove(indiceCompletada-1);
                    System.out.println("La tarea se ha marcado como completada.");
                    break;
                case 5:
                    System.out.print("\nIngrese el número de tarea a eliminar: ");
                    int indiceEliminar = scanner.nextInt();
                    tareas.remove(indiceEliminar-1);
                    System.out.println("La tarea se ha eliminado correctamente.");
                    break;
                case 6:
                    System.out.println("¡Hasta luego!");
                    return;
                default:
                    System.out.println("Opción no válida.");
                    break;
            }
        }
    }
}
