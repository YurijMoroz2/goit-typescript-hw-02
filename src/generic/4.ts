/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

// class Component {
//   constructor (public props:T) {

//   }
// }

// class Page extends Component {
//   pageInfo () {
//     console.log(this.props.title);
//   }
// }
// Оголошуємо інтерфейс для властивостей сторінки
interface PageProps {
  title: string;
  // Додайте інші властивості, якщо потрібно
}

// Оголошуємо клас Component з типовим параметром T
class Component<T> {
  constructor(public props: T) {}
}

// Клас Page успадковує клас Component і вказує тип параметра PageProps
class Page extends Component<PageProps> {
  pageInfo() {
      console.log(this.props.title);
  }
}

// Створюємо екземпляр класу Page
const page = new Page({ title: 'My Page' });
page.pageInfo();

export {};