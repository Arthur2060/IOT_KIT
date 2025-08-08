import './App.css'
import ButtonGroup from '@mui/material/ButtonGroup'
import Button from '@mui/material/Button'

export default function App() {
  return (
    <>
      <header className='w-full h-[10vh] bg-green-800 flex justify-around items-center'>
        <ButtonGroup variant="contained" color="inherit" aria-label="">
          <Button>Sobre o projeto</Button>
          <Button>Porque IOT-KIT?</Button>
          <Button>Sobre nós</Button>
        </ButtonGroup>
      </header>
      <main>
        <section id='apresentacao' className='w-full h-[70vh] bg-green-600 flex'>
          <div className='bg-white h-full grow-1 flex justify-center items-center rounded-l-none rounded-r-full'>
            <img src="public\IOT_KIT_svg.svg" alt="" className='w-[30%]' />
          </div>
          <div className='grow-1 h-full flex justify-left items-center flex-col text-white text-left'>
            <div>
              <h1 className='text-bold text-[48px]'>Conheça o IOT-KIT!</h1>
              <h2 className='text-bold text-[35px]'>O IOT multiuso do SENAI</h2>
              <p className='w-[20vw] text-[30px]'>
                IOT-KIT é uma placa com um microcontrolador 
                ESP-32 criada com objetivo de ensinar IOT na prática,
                de forma simples e direta!
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
