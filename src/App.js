import "./App.css"; 
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup.string().email('Email inválido').required('Email é obrigatório'),
  senha: yup.string().required('Senha é obrigatória').min(7, "Senha deve ter 7 caracteres"),
});

function App() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <div className="background"> 
      <form className="login" onSubmit={handleSubmit(onSubmit)}>
        <h2>Faça seu login</h2>
        <input
          type="email"
          placeholder="Email"
          {...register("email")}
        />
        {errors.email && <span className="errors">{errors.email.message}</span>}

        <input
          type="password"
          placeholder="Senha"
          {...register("senha")}
        />
        {errors.senha && <span className="errors">{errors.senha.message}</span>}

        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default App;
