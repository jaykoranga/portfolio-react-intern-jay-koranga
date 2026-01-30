interface FormProps {
  isModalActive: boolean
  setIsModalActive: React.Dispatch<React.SetStateAction<boolean>>
}

const Form = ({ isModalActive, setIsModalActive }: FormProps) => {

  if (!isModalActive) return null 

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("form is submitted")
    alert("form submitted")
    setIsModalActive(false)
  }

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={() => setIsModalActive(false)} 
    >
      <form
        onSubmit={handleSubmit}
        onClick={(e) => e.stopPropagation()} 
        className="bg-white p-6 rounded-lg shadow-md w-[90%] max-w-md flex flex-col gap-4"
      >
        <div>
          <label className="block mb-1">Name</label>
          <input type="text" name="username" className="w-full border p-2 rounded" />
        </div>

        <div>
          <label className="block mb-1">Email</label>
          <input type="email" name="email" className="w-full border p-2 rounded" />
        </div>

        <div>
          <label className="block mb-1">Contact</label>
          <input type="number" name="contact" className="w-full border p-2 rounded" />
        </div>

        <button
          type="submit"
          className="bg-black text-white py-2 rounded hover:opacity-90"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default Form
