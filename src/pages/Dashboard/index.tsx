import React from 'react';

import { FiPower, FiClock } from 'react-icons/fi';
import {
  Container,
  Header,
  HeaderContainer,
  Profile,
  Content,
  Schedule,
  Calendar,
  NextAppointment,
  Section,
} from './styles';
import logoImg from '../../assets/logo.svg';
import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const { signOut, user } = useAuth();

  return (
    <Container>
      <Header>
        <HeaderContainer>
          <img src={logoImg} alt="GoBarber" />

          <Profile>
            <img src={user.avatar_url} alt={user.name} />
            <div>
              <span>Bem vindo,</span>
              <strong>{user.name}</strong>
            </div>
          </Profile>

          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContainer>
      </Header>

      <Content>
        <Schedule>
          <h1>Horários agendados</h1>
          <p>
            <span>Hoje</span>
            <span>Dia 26</span>
            <span>Terça-feira</span>
          </p>

          <NextAppointment>
            <strong>Atendimento a seguir</strong>
            <div>
              <img
                src="https://avatars0.githubusercontent.com/u/12039169?s=460&u=0b26f6cc1de7af99fb3efbfe4da57670a6fe4323&v=4"
                alt="Enio"
              />

              <strong>Enio L. Sombra</strong>

              <span>
                <FiClock />
                08:00
              </span>
            </div>
          </NextAppointment>

          <Section>
            <strong>Manhã</strong>
          </Section>

          <Section>
            <strong>Tarde</strong>
          </Section>
        </Schedule>

        <Calendar>
          <h4>Calendário</h4>
        </Calendar>
      </Content>
    </Container>
  );
};

export default Dashboard;
