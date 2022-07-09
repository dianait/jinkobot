/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unknown-property */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import Link from 'next/link';
import Badge from 'components/Badge';
import Modal from 'react-modal';
import { useState } from 'react';
import Settings from 'components/Settings';

function Row({ id, name, isActive, sessionCount }) {
  const [isOpen, setIsOpen] = useState(false);

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
    },
  };

  function toggleModal() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <tr>
        <td>🙍‍♀️ {name}</td>
        <td>
          <Badge
            label={isActive}
            backgroundColor={isActive == 'ACTIVO' ? '#54B758' : '#E25F36 '}
          />
        </td>
        <td>{sessionCount}</td>
        <td colSpan={2}>
          <section>
            <Link href={`/pacientes/[id]`} as={`/pacientes/${id}`}>
              <span>📈 GRÁFICAS</span>
            </Link>
            <button className="start" onClick={toggleModal}>
              🚀 EMPEZAR
            </button>
          </section>
        </td>
        <style jsx>{`
          span {
            margin-top: 40px;
            cursor: pointer;
          }
          * {
            height: 4rem;
            text-align: center;
          }
          tr,
          td {
            border: 2px solid lightgray;
          }
          td:first-child {
            text-align: left;
            padding-left: 1rem;
          }
          section {
            display: flex;
            justify-content: center;
            align-items: center;
            align-content: center;
            gap: 1rem;
          }

          button.start {
            background: none;
            border: none;
            font-size: 1.2rem;
            cursor: pointer;
          }

          button.start:hover,
          span:hover {
            color: orange;
          }
        `}</style>
      </tr>
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        style={customStyles}>
        <button
          onClick={toggleModal}
          style={{
            background: 'none',
            border: 'none',
            marginLeft: '29rem',
            fontSize: '1.3rem',
            marginBottom: '0px',
          }}>
          ❌
        </button>
        <Settings name={name} />
      </Modal>
    </>
  );
}

export default Row;
