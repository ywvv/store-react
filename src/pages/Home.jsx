import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'

const Home = () => {
  return (
    <Container
      className='text-center w-75 fs-4'
      style={{ paddingTop: '100px', paddingBottom: '100px' }}>
      <h1>Home</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
        asperiores, aspernatur enim eveniet explicabo inventore laboriosam magni
        maxime porro quisquam repellat sequi sit. Accusamus aperiam asperiores
        beatae consectetur culpa cupiditate doloremque dolorum et hic ipsam
        ipsum itaque, iusto magni maiores modi nihil optio pariatur perferendis
        quas quidem quisquam ratione reiciendis sint sit tempore unde ut,
        veniam.
      </p>
      <Link className='btn btn-success btn-lg' to='/store'>
        Go Store
      </Link>
    </Container>
  )
}

export default Home
