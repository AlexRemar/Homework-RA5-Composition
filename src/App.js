import Cards from './components/Cards';
import Decomposition from './components/Decomposition';

function App() {
  return (
    <div className={'wrapper'}>
      <header className={'header'} id={'header'}>
        <div className={'header__body _container'}>
          <h2 className={'header__title'}>5. Домашнее задание к лекции «Композиция компонентов»</h2>
        </div>
      </header>

      <main className={'main'}>
        <div className={'main__item task _container'} id={'task1'}>
          <header className={'task__header'}>
            <h3 className={'task__title'}>5.1 Карточки</h3>
            <nav className={'task__menu menu'}>
              <div className={'menu__item'}>
                <a className={'menu__link menu__link-bottom'} href={'#task2'}>
                  <span className={'_visually-hidden'}>next task</span>
                </a>
              </div>
            </nav>
          </header>
          <div className={'task__body'}>
            <Cards />
          </div>
        </div>

        <div className={'main__item task _container'} id={'task2'}>
          <header className={'task__header'}>
            <h3 className={'task__title'}>5.2 Декомпозиция</h3>
            <nav className={'task__menu menu'}>
              <div className={'menu__item'}>
                <a className={'menu__link menu__link-top'} href={'#header'}>
                  <span className={'_visually-hidden'}>previous task</span>
                </a>
              </div>
              <div className={'menu__item'}>
                <a className={'menu__link menu__link-bottom'} href={'#task3'}>
                  <span className={'_visually-hidden'}>next task</span>
                </a>
              </div>
            </nav>
          </header>
          <div className={'task__body task__body_task2'}>
            <Decomposition />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
