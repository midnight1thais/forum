import { ButtonNo, ButtonYes, DivButtons, DivImg, DivQuestion, ImageTrash, MainDelete, QuestionContainer, SecondDiv } from "./style"
import trash from "../../assets/trash.svg"

function DeletePopUp(props){
    return(
        <>
        
            <MainDelete>
                <div>
                    <DivQuestion>
                        <QuestionContainer>Deletar {props.whatDelete}?</QuestionContainer>
                    </DivQuestion>
                    <DivImg>
                        <ImageTrash src={trash}/>
                    </DivImg>
                    <DivButtons>
                        <ButtonNo>Não</ButtonNo>
                        <ButtonYes>Sim</ButtonYes>
                    </DivButtons>
                </div>
            </MainDelete>
        
        </>
    )
}

export default DeletePopUp