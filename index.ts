class Departamento {
  nombre: string;
  constructor(nombre: string) {
    this.nombre = nombre;
  }
  getName() {
    return this.nombre;
  }
}
class Piso {
  dptos: Departamento[];
  nombre: string;
  constructor(nombre) {
    this.nombre = nombre;
    this.dptos = [];
  };
  pushDepartamento(dpto: Departamento) {
    return this.dptos.push(dpto);
  };
  getDepartamentos(): Departamento[] {
    return this.dptos;
  };
}
class Edificio {
  pisos: Piso[];
  constructor(pisos: Piso[]) {
    this.pisos = pisos;
  }
  addDepartamentoToPiso(nombreDePiso: string, departamento: Departamento) {
    const encontrarPiso = this.pisos.find((p) => { 
      return p.nombre == nombreDePiso;
    });
    return encontrarPiso.pushDepartamento(departamento);
  }
  getDepartamentosByPiso(nombreDelPiso: string): Departamento[] {
    const pisoEncontrado = this.pisos.find((p) => {
       return p.nombre == nombreDelPiso;
    });

    return pisoEncontrado.getDepartamentos();
  }
}

// crear las clases Edificio, Piso y Departamento aquí

// no modificar este test
function testClaseEdificio() {
  const unPiso = new Piso("planta baja");
  const otroPiso = new Piso("primer piso");
  const unEdificio = new Edificio([unPiso, otroPiso]);
  const deptoUno = new Departamento("depto uno");
  const deptoDos = new Departamento("depto dos");
  const deptoTres = new Departamento("depto tres");
  unEdificio.addDepartamentoToPiso("planta baja", deptoUno);
  unEdificio.addDepartamentoToPiso("planta baja", deptoDos);
  unEdificio.addDepartamentoToPiso("planta baja", deptoTres);

  const deptos = unEdificio.getDepartamentosByPiso("planta baja");
  const deptosEmpty = unEdificio.getDepartamentosByPiso("primer piso");

  if (
    Array.isArray(deptosEmpty) &&
    deptosEmpty.length == 0 &&
    deptos.length == 3 &&
    deptos[2].getName() == "depto tres"
  ) {
    console.log("testClaseBandaApartment passed");
  } else {
    throw "testClaseBandaApartment not passed";
  }
}

function main() {
  testClaseEdificio();
  console.log("nuevo cambio")
}
main();
