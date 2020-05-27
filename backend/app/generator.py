import numpy as np
import matplotlib.pyplot as plt
from io import BytesIO
from matplotlib.backends.backend_agg import FigureCanvasAgg as FigureCanvas
from matplotlib.patches import Circle


# Función que retorna el campo Eléctrico.
def E(q, r0, x, y):
    """Retorna el vector de campo eléctrico E=(Ex,Ey) de una carga q en r0"""
    den = np.hypot(x - r0[0], y - r0[1]) ** 3
    return q * (x - r0[0]) / den, q * (y - r0[1]) / den


def graph(charges):
    # # puntos de los ejes x e y.
    nx, ny = 64, 64
    x = np.linspace(-2, 2, nx)
    y = np.linspace(-2, 2, ny)
    X, Y = np.meshgrid(x, y)

    # # Vector de campo eléctrico como componentes separados (Ex,Ey)
    Ex, Ey = np.zeros((ny, nx)), np.zeros((ny, nx))
    for charge in charges:
        ex, ey = E(*charge, x=X, y=Y)
        Ex += ex
        Ey += ey

    fig = plt.figure()
    ax = fig.add_subplot(111)

    # # Dibujar las líneas de flujo con mapa de colores y estilos apropiados.
    color = 2 * np.log(np.hypot(Ex, Ey))
    ax.streamplot(x, y, Ex, Ey, color=color, linewidth=1, cmap=plt.cm.inferno, density=2, arrowstyle='->',
                  arrowsize=1)

    # # Agregar circulos para las cargas.
    charge_colors = {True: '#aa0000', False: '#0000aa'}
    for q, pos in charges:
        ax.add_artist(Circle(pos, 0.05, color=charge_colors[q > 0]))

    # Graficar
    ax.set_xlabel('$x$')
    ax.set_ylabel('$y$')
    ax.set_xlim(-2, 2)
    ax.set_ylim(-2, 2)
    ax.set_aspect('equal')
    canvas = FigureCanvas(plt.figure(1))
    output = BytesIO()
    canvas.print_png(output)
    return output.getvalue()
