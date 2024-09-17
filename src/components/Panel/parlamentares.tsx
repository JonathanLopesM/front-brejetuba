import React, { useContext, useEffect } from "react"
import { AuthContext } from "../../contexts/AuthProvider"

export function PainelParlamentares ({ dados, materia}) {
  const { parlamentares, GetParlamentares, matters, Matters} = useContext(AuthContext)

  useEffect(()=>{
    if(!parlamentares){
      GetParlamentares()
    }

  },[])
  const partidos = [
    { name: "Ademir Antônio Correa", partido: "MDB" },
  { name: "Antonio Ferreira Brum Neto", partido: "Rep." },
  { name: "Antônio Marcos Bonifácio de Souza", partido: "PP" },
  { name: "Arli Jose Dela Costa", partido: "PRD" },
  { name: "Delurdes da Costa Miranda", partido: "MDB" },
  { name: "Denis Simões Dias", partido: "PP" },
  { name: "Jairo Cunha", partido: "PRD" },
  { name: "Leandro Santana da Silva", partido: "PP" },
  { name: "Luciana Maria da Silva", partido: "PDT" }
  ];

// Verificar os dados do retorno parar conferir se 
// visualizar o voto do parl na tela do paine
  return (
    <>
     {
      materia &&
      <div className=" sm:flex text-center justify-center items-center lg:gap-2 sm:px-8">
        <h4 className="text-xs lg:text-base xl:text-xl font-extrabold">
          {materia.__str__}
        </h4>  
        -
        <h4 className=" text-xs  xl:text-xl font-extrabold">
          {materia.ementa}
        </h4>  
     </div>
     }
    {dados && 
    <div className="flex flex-col w-full min-h-[600px] lg:min-h-full sm:max-h-screen justify-center items-center mt-5">
      <div className="grid  sm:grid-cols-3 gap-4 px-2 lg:w-[80%]">
        {dados.stateVote.map((par, index)=> (
          <div key={par.id} className="flex gap-4 justify-between border rounded-l-[48px]">
            <div className="flex gap-2 items-center ">
              <div className="flex bg-white w-12 h-12 lg:w-12 lg:h-12 xl:w-16  xl:h-16 object-cover overflow-hidden rounded-full justify-center">
                <img className="flex object-contain " src={par.fotografia} alt={`foto do parlamentar ${par.name}`} />
              </div>
              <div className="flex flex-col justify-center sm:text-xs lg:text-lg">
                <h2 className="flex sm:text-[8px] lg:text-base font-semibold">
                  {par.name}
                </h2>
                <div className="flex gap-2">
                  <span>
                    {partidos[index]?.partido ? partidos[index]?.partido : ''} |
                  </span>
                  {
                    par.presenca ? 
                    <span className="text-green-400 font-bold">Presente</span>
                    : <span className="text-red-400 font-bold">
                      Ausente
                    </span>
                  }
                </div>
              </div>
            </div>
            {dados?.registro}
            {
              dados?.registro ? 
              <div className={`flex border-2 ${par.voto == "Sim" && "border-green-500"} ${par.voto == "Não" && "border-red-500"} w-[100px] items-center justify-center px-2 sm:text-xs lg:text-base`}>
                  {/* // text-green-400 */}
                  <span className={`font-bold ${par.voto == "Sim" && "text-green-500"} ${par.voto == "Não" && "text-red-500"} w-[80px] text-center `}>
                    {par.voto}
                  </span>
              </div>
              : <div className={`flex border w-[20px] lg:w-20 xl:w-[100px] items-center justify-center px-2 ${par?.voto?.toLowerCase() !== "não votou" ? "bg-yellow-300" : "bg-white"}`}>
                </div>
            }
          </div>
        ))}
      </div>

    </div>
    }
    </>
  )
}