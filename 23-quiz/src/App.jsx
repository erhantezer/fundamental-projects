import Modal from "./components/Modal"

function App() {

  return (
    <main>
      <Modal />
      <section className='quiz'>
        <p className='correct-answers'>
          correct answers : 
        </p>
        <article className='container'>
          <h2 
          // dangerouslySetInnerHTML={{ __html:  }} 
          />
          <div className='btn-container'>
            
          </div>
        </article>
        <button className='next-question' >
          next question
        </button>
      </section>
    </main>
  )
}

export default App
