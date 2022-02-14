const musicList = [
    {
        id: 3456,
        title: 'Do I wanna know',
        author: 'Arctic Monkeys',
        album: 'AM',
        genre: 'инди',
        year: 2013,
    },
    {
        id: 1234,
        title: 'R U Mine?',
        author: 'Arctic Monkeys',
        album: 'AM',
        genre: 'инди',
        year: 2013,
    },
    {
        id: 5436,
        title: 'Chandelier',
        author: 'Sia',
        album: '1000 Forms Of Fear',
        genre: 'поп',
        year: 2014,
    },
    {
        id: 9823,
        title: 'Elastic Hearts',
        author: 'Sia',
        album: '1000 Forms Of Fear',
        genre: 'поп',
        year: 2015,
    },
    {
        id: 3002,
        title: 'I\'m Yours',
        author: 'Jason Mraz',
        album: 'I\'m Yours',
        genre: 'поп',
        year: 2008,
    },
    {
        id: 1382,
        title: 'Relax, Take It Easy',
        author: 'Mika',
        album: 'Life In Cartoon Motion',
        genre: 'поп',
        year: 2007,
    },
    {
        id: 7023,
        title: 'Happy Ending',
        author: 'Mika',
        album: 'Life In Cartoon Motion',
        genre: 'поп',
        year: 2007
    },
    {
        id: 6460,
        title: 'Born To Die',
        author: 'Lana Del Rey',
        album: 'Born To Die',
        genre: 'поп',
        year: 2012,
    },
    {
        id: 5025,
        title: 'Summertime Sadness',
        author: 'Lana Del Rey',
        album: 'Born To Die',
        genre: 'поп',
        year: 2012
    },
    {
        id: 3090,
        title: 'Can\'t Feel My Face',
        author: 'The Weeknd',
        album: 'Beauty Behind The Madness',
        genre: 'r&b',
        year: 2015,
    },
    {
        id: 1020,
        title: 'The Hills',
        author: 'The Weeknd',
        album: 'Beauty Behind The Madness',
        genre: 'r&b',
        year: 2015,
    },
    {
        id: 1211,
        title: 'Waiting For Love',
        author: 'Avicii',
        album: 'Stories',
        genre: 'танцевальная музыка',
        year: 2015,
    },
    {
        id: 7708,
        title: 'Wake Me Up',
        author: 'Avicii',
        album: 'True',
        genre: 'танцевальная музыка',
        year: 2013,
    },
]
musicList.forEach((alem) => {
    console.log(`
      Название:${alem.title}
Автор:${alem.author}
Альбом:${alem.album}
Жанр:${alem.genre}
Год:${alem.year}
id:${alem.id}
      `);
});
const popMusic=musicList.map((alem)=>alem.title);
console.log(popMusic);
const name=musicList.filter((alem)=>alem.author==="author");
const genres=musicList.filter((alem)=>alem.genre==="genre");
let UserSong=true;
while(UserSong){
    let TitleList=prompt("номер песни?")
    const Found=musicList.find((alem)=>
    alem.author.toLowerCase().toUpperCase().includes() || 
    alem.id === TitleList
    );
    if(Found!==undefined){
        alert(Found.author)
    }
    UserSong=confirm("Еще что-нибудь?")
}

/* 7.
1. Сoздайте пустой массив userMusic
2. Циклически запрашивайте у пользователя какую песню он ищет. Пользователь может ввести:
- полностью id песни, тогда нужно в alert выводить ему найденную песню по этому id, и добавить в массив userMusic.
- частично название песни, тогда выполнять те же действия что и при первом варианте.
- частично автора песни, в таком случае
нужно вывести в prompt все найденные песни этого автора, и спросить какую он хочет выбрать, и затем повторить те же действия что и в первом варианте.
3. В конце шага, нужно спросить хочет ли еще поискать песни, чтобы продолжить цикл.
4. В конце в консоли показать выбранные песни в виде текста*/