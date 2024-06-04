import "./App.css"; 
import { useForm } from "react-hook-form";

function App() {
  
  const { register, handleSubmit, watch, formState: {errors} } = useForm()

  const onSubmit = (data) =>{
    console.log(data)
  }

  return (
    <div className="background"> 
      <form className="login" onSubmit={handleSubmit(onSubmit)}>
        <h2>Faça seu login</h2>
        <input
          type="email"
          placeholder="Email" {...register("email")}/>
        <input
          type="password"
          placeholder="Senha" {...register("senha")}/>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default App;
