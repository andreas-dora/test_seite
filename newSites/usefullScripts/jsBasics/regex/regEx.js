// const testString ="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia ex, minus dolores est recusandae facilis corporis earum aliquid esse distinctio. Dolorem officiis recusandae dolorum hic, temporibus voluptatum natus asperiores dignissimos laudantium deleniti odio blanditiis, eaque neque eius! Minima non possimus earum! Perspiciatis sunt id cum ab, vel aut error voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga necessitatibus dignissimos totam autem excepturi deleniti corrupti enim explicabo sapiente quibusdam dicta atque, qui voluptatum facilis earum doloremque ut quo perspiciatis cumque a! Doloremque ipsa omnis non laboriosam enim nostrum totam alias natus cupiditate. Totam laudantium tempora tenetur possimus similique neque optio, adipisci delectus itaque obcaecati fugiat aliquid ipsa nihil numquam amet praesentium sit accusamus iure eaque quod quo cumque animi! Vero similique laborum deserunt maiores perferendis commodi doloribus at eligendi, officia blanditiis vel iure, quidem repudiandae deleniti neque nesciunt in qui fugiat quos exercitationem impedit dignissimos explicabo mollitia dolore. Provident officia ex expedita neque consectetur in. Reprehenderit corrupti ab mollitia earum aperiam aliquid necessitatibus vel, saepe tenetur ut, pariatur qui cumque dignissimos aspernatur facere consequuntur sequi repudiandae harum ratione esse modi fuga! Molestias deleniti, facere sint iste natus amet libero ipsam ipsum porro molestiae maxime corrupti. Atque commodi distinctio dolorem laboriosam deleniti quia asperiores vel laudantium, veniam repellat dignissimos quasi blanditiis nihil, id voluptates autem non aspernatur, expedita totam iusto. Consequatur dicta eius commodi culpa inventore nesciunt adipisci tenetur similique! Tempora accusantium dignissimos deserunt cum eaque eum, magnam voluptas velit quia suscipit in praesentium! Ullam est sunt assumenda aliquid ducimus.";


// var testEx = /est/;

// console.log(testEx.exec(testString));



const testString = 'Liebe Freunde, meine neue Nummer lautet: +49 69 1234567. Fax:  +49 69 4578911. Ich Wünsch euch schöne Ferien.';
var rXp = /\+?\d{2}\s\d{2,3}\s\d{5,7}/g;
var result; 
while((result=rXp.exec(testString)) !==null){
  console.log(
    'Nummer ' + result[0] + ' gefunden an Index: ' +result.index + '.'
  ); 

};


// console.log(rXp.test(myMobil));
// var meinKuchen = "Käsekuchen";
// var eXp = /^K/;
// console.log(eXp.test(meinKuchen));
// const numberOne = '49 69 1234567';
// const palindrom = "In Girum Imus Nocte Et Consumimur Igni";

// const eXp = /............./;

// console.log(eXp.test(numberOne));
// console.log(eXp.test(palindrom));
