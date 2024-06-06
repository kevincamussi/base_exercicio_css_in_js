import { FormEvent, useState } from 'react'
import * as S from './styles'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    // <S.FormDasVagas onSubmit={aoEnviarForm}>
    <S.FormDasVagas>
      <S.InputVagas
      // placeholder="Front-end, fullstack, node, design"
      // onChange={(e) => setTermo(e.target.value)}
      // type="search"
      />
      {/* <button type="submit">Pesquisar</button> */}
      <S.BotaoVagas>Pesquisar</S.BotaoVagas>
    </S.FormDasVagas>
  )
}
export default FormVagas
