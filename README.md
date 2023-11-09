<a name="top"></a>

# 5. Домашнее задание к лекции «Композиция компонентов»

[![Build status](https://ci.appveyor.com/api/projects/status/emnds7ppt8jc4a6h?svg=true)](https://ci.appveyor.com/project/AlexRemar/Homework-RA5-Composition) [[GithubPages](https://AlexRemar.github.io/Homework-RA5-Composition)]

---

**Перейти к:**  
***[5.2 Декомпозиция](#5.2)  


---

## 5.1 Карточки

Вам необходимо реализовать компонент карточек, позволяющий использовать себя следующим образом:

![](./assets/card1.png)

![](./assets/card2.png)

В качестве CSS вы можете использовать Bootstrap, а подглядеть генерируемую разметку можете на странице: https://getbootstrap.com/docs/4.3/components/card/

Подсказка: используйте для этого `props.children` и `props` для отображения картинки.

---

## <a name="5.2">5.2 Декомпозиция</a>
***[(наверх)](#top)***

Вы работаете в стартапе, который решил тягаться с самим Яндексом в части предоставления контента. Это, конечно же шутка, но задача нешуточная.

Вам принесли дизайн-макет, похожий на этот:

![](./assets/decomposition.png)

Что вам нужно сделать:

1. Разбейте весь интерфейс на компоненты и в файле каждого компонента напишите буквально одну строку комментария, за что данный компонент отвечает. Можете использовать формат JSDoc, детали про него можно посмотреть по ссылке. Также рекомендуем статью на тему JSDoc.
1. Постарайтесь повторящиеся компоненты сделать настраемыми за счёт `props`. Допустим, у каждой новости в списке новостей: иконка, текст и ссылка.

Функциональность и стилизацию реализовывать не нужно, достаточно базового оформления (чтобы видно было все блоки).

---

