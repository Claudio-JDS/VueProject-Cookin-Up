import type ICategoria from "@/interfaces/ICategoria";

export async function obterCategorias() {
  const resposta = await fetch('https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/bf463b47860043da3b3604ca60cffc3ad1ba9865/categorias.json');

  const categorias: ICategoria[] = await resposta.json();

  /*Caso queira determinar um tempo para a resposta da api*/
  // await new Promise((resolve) => {
  //   // Demora 3 segundos para obter respostas
  //   setTimeout(resolve, 3000)
  // })

  return categorias;
}

