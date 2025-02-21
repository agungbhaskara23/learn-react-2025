export default function Header3({author}) { //penerapan props refactor (destructuring + ternary refactor)
    return (<h1>Halo belajar react nih bareng {author ? author: 'Agung'}😊</h1>);
  };