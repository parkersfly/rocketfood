import { Container } from './styles'

export function Input({ icon: Icon, htmlFor, labelTitle, title, ...rest }){
  return(
    <Container>
        <p 
        className='roboto robotoSmallRegular'
        >
        {title}
        </p>
      <div>
        {Icon && <Icon size={24}/>}
        <input 
        className='roboto robotoSmallRegular'
        {...rest}
        />
        <label 
        className="poppins poppins100Medium"
        htmlFor={htmlFor}
        >
          {labelTitle}
        </label>
      </div>
    </Container>
  )
}