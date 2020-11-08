<span class="code__object">let</span> <span class="code__variable">book</span> = {
  <span class="code__variable">name</span>: '<span class="code__string">Ada Adore</span>',
  <span class="code__variable">price</span>: <span class="code__number">12.90</span>(,
  <span class="code__variable">author</span>: '<span class="code__string"><span class="code__string">Vladimir Nabokov</span></span>',
  <span class="code__variable">isbn</span>: '99213989812',
  <span class="code__function">printDescription</span>:<span class="code__object"> <span class="code__object">function</span></span>(){
    <span class="code__variable">console</span>.<span class="code__function">log</span>(<span class="code__function">this</span>.<span class="code__variable">author</span> + ' : ' + <span class="code__function">this</span>.<span class="code__variable">name</span>);
  }
}



<span class="code__variable">console</span>.<span class="code__function">log</span>(<span class="code__variable">book</span>.<span class="code__variable">name</span>);
<span class="code__variable">console</span>.<span class="code__function">log</span>(<span class="code__variable">book</span>.<span class="code__variable">author</span>);

<span class="code__variable">book</span>.<span class="code__function">printDescription</span>();



<span class="code__object">let</span> <span class="code__variable">book</span> = {
  <span class="code__variable">name</span>: '<span class="code__string">Ada Adore</span>',
  <span class="code__variable">price</span>: <span class="code__number">12.90</span>(,
  <span class="code__variable">author</span>: '<span class="code__string">Vladimir Nabokov</span>',
  <span class="code__variable">isbn</span>: '99213989812',
  <span class="code__function">printDescription</span>:<span class="code__object"> <span class="code__object">function</span></span>(){
    <span class="code__variable">console</span>.<span class="code__function">log</span>(<span class="code__function">this</span>.<span class="code__variable">author</span> + ' : ' + <span class="code__function">this</span>.<span class="code__variable">name</span>);
  }
}



<span class="code__variable">console</span>.<span class="code__function">log</span>(<span class="code__variable">book</span>.<span class="code__variable">name</span>);
<span class="code__variable">console</span>.<span class="code__function">log</span>(<span class="code__variable">book</span>.<span class="code__variable">author</span>);

<span class="code__variable">book</span>.<span class="code__function">printDescription</span>();

class <span class="code__cl">Book</span> {
  <span class="code__function">constructor</span>(<span class="code__variable">name</span>, <span class="code__variable">author</span>, <span class="code__variable">price</span>, <span class="code__variable">isbn</span>){
    <span class="code__function">this</span>.<span class="code__variable">name</span> = <span class="code__variable">name</span>;
    <span class="code__function">this</span>.<span class="code__variable">author</span> = <span class="code__variable">author</span>;
    <span class="code__function">this</span>.<span class="code__variable">price</span> = <span class="code__variable">price</span>;
    <span class="code__function">this</span>.<span class="code__variable">isbn</span> = <span class="code__variable">isbn</span>;
  }
  <span class="code__function">printDescription</span>(){
    <span class="code__variable">console</span>.<span class="code__function">log</span>(<span class="code__function">this</span>.<span class="code__variable">author</span> + ' : ' + <span class="code__function">this</span>.<span class="code__variable">name</span>);
  }
}

<span class="code__object">function</span><span class="code__cl">Book</span>(<span class="code__variable">name</span>, <span class="code__variable">author</span>, <span class="code__variable">price</span>, <span class="code__variable">isbn</span>){
  <span class="code__function">this</span>.<span class="code__variable">name</span> = <span class="code__variable">name</span>;
  <span class="code__function">this</span>.<span class="code__variable">author</span> = <span class="code__variable">author</span>;
  <span class="code__function">this</span>.<span class="code__variable">price</span> = <span class="code__variable">price</span>;
  <span class="code__function">this</span>.<span class="code__variable">isbn</span> = <span class="code__variable">isbn</span>;
  <span class="code__function">this</span>.<span class="code__function">printDescription</span> =<span class="code__object"> <span class="code__object">function</span></span>(){
  <span class="code__variable">console</span>.<span class="code__function">log</span>(<span class="code__function">this</span>.<span class="code__variable">author</span> + ' : ' + <span class="code__function">this</span>.<span class="code__variable">name</span>);
  }
}

<span class="code__object">var </span><span class="code__variable">book</span> = new <span class="code__cl">Book</span>(
  '<span class="code__string">Ada Adore</span>', '<span class="code__string">Vladimir Nabokov</span>', <span class="code__number">29,90</span>(, '808123081ß'
)
<span class="code__object">var </span><span class="code__variable">book2</span> = new <span class="code__cl">Book</span>(
  '<span class="code__string">Pale Fire</span>', '<span class="code__string">Vladimir Nabokov</span>', <span class="code__number">26,90</span>(, '8011823081ß'
)

// <span class="code__variable">console</span>.<span class="code__function">log</span>(<span class="code__cl">Book</span>.prototype);
// <span class="code__variable">console</span>.<span class="code__function">log</span>(<span class="code__variable">book</span>.__proto__);
<span class="code__variable">console</span>.<span class="code__function">log</span>(<span class="code__cl">Object</span>.<span class="code__function">getPrototypeOf</span>(<span class="code__variable">book</span>));
<span class="code__variable">console</span>.<span class="code__function">log</span>(<span class="code__variable">book</span>.constructor);

<span class="code__variable">console</span>.<span class="code__function">log</span>(typeof <span class="code__variable">book</span>);
<span class="code__variable">console</span>.<span class="code__function">log</span>(<span class="code__variable">book</span> instanceof <span class="code__cl">Book</span>);