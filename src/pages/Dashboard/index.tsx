import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => (
  <>
    <img src={logoImg} alt="Github Explorer" />
    <Title>Explore repositórios no Github</Title>
    <Form>
      <input placeholder="Digite o nome do repositório" />
      <button type="submit">Pesquisar </button>
    </Form>
    <Repositories>
      <a href="repository">
        <img
          src="https://avatars1.githubusercontent.com/u/23222417?s=460&u=6a700ff0b0a94ba2f2c8a04c77039b079f2ee60b&v=4"
          alt="imagem"
        />
        <div>
          <strong>testando repositorio</strong>
          <p>Titulo do repositorio</p>
        </div>
        <FiChevronRight size={20} />
      </a>
    </Repositories>
  </>
);
export default Dashboard;
