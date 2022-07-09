/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Container, Item, MenuStyled } from './style';
import Link from 'next/link';
import useUser from 'Hooks/useUser';
interface Props {
  items: string[];
}

const Menu: React.FC<Props> = ({ items }: Props) => {
  const user = useUser();
  const email = 'dianahdezsoler@gmail.com';

  if (user == undefined || user == null) {
    return <div></div>;
  }

  return (
    <Container>
      <img src="../img/logo_blanco.png" alt="logo jinkobot" width="70px" />
      <Item>INKOBOT</Item>
      <MenuStyled>
        {items.map((item: string, index: number) => {
          const href: string = item == 'inicio' ? '' : item.toLowerCase();
          const name: string = item == 'logout' ? 'cerrar sessión' : item;
          return (
            <Link key={index} href={`/${href}`}>
              <li>
                <Item>{name}</Item>
              </li>
            </Link>
          );
        })}
        <li>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
              marginTop: '2.2rem',
            }}>
            <p className="email">{email}</p>
            <Link href="/logout">
              <p>Cerrar Sesión</p>
            </Link>
          </div>
        </li>
      </MenuStyled>
      <style jsx>{`
        p.email {
          color: white;
          margin: 0;
          padding: 0;
        }
        p:not(.email) {
          font-size: 1.1rem;
          text-align: center;
          margin-top: 0;
          cursor: pointer;
        }
        p:hover {
          color: white;
        }
        button {
          background: none;
          border: none;
          outline: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          width: 100%;
          font-size: 1.2rem;
        }

        button:hover {
          color: white;
        }

        img.logout {
          width: 30px;
          padding: 0.2rem;
        }
      `}</style>
    </Container>
  );
};

export default Menu;
