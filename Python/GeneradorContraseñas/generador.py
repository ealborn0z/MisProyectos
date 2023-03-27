import random
import string

def generar_contrasena(longitud, caracteres):
    """
    Función que genera una contraseña aleatoria de una longitud y caracteres específicos
    """
    contrasena = ''.join(random.choices(caracteres, k=longitud))
    return contrasena

longitud = int(input("Ingrese la longitud de la contraseña: "))

caracteres = input("Ingrese los caracteres permitidos: ")

contrasena_generada = generar_contrasena(longitud, caracteres)

print(f"Su contraseña generada es: {contrasena_generada}")
