import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Response, Comic } from './types';

dayjs.extend(relativeTime);

const email: string = 'a.keruly@innopolis.university';

fetch(`https://fwd.innopolis.university/api/hw2?email=${email}`)
    .then(response => response.json())
    .then((data: Response) => {
        return fetch(`https://fwd.innopolis.university/api/comic?id=${data}`);
    })
    .then(response => response.json())
    .then((comic: Comic) => {
        const comicContainer: HTMLElement | null = document.getElementById('comic-container');
        if (!comicContainer) return;

        const comicDate: Date = new Date(parseInt(comic.year), parseInt(comic.month) - 1, parseInt(comic.day));
        const formattedDate: string = comicDate.toLocaleDateString();
        const fromNow: string = dayjs(comicDate).fromNow();

        const imgElement: HTMLImageElement = document.createElement('img');
        imgElement.src = comic.img;
        imgElement.alt = comic.alt;

        const dateElement: HTMLParagraphElement = document.createElement('p');
        dateElement.textContent = `Date: ${formattedDate} (${fromNow})`;

        const titleElement: HTMLHeadingElement = document.createElement('h1');
        titleElement.textContent = comic.safe_title;

        comicContainer.appendChild(titleElement);
        comicContainer.appendChild(imgElement);
        comicContainer.appendChild(dateElement);
    });
