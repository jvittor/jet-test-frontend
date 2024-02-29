import mockData from '../data/mockData';

export default function TablesCar() {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Imagem</th>
          <th>Modelo</th>
          <th>Próxima Reserva</th>
          <th>Status</th>
          <th>Estrelas</th>
        </tr>
      </thead>
      <tbody>
        {mockData.map((car) => (
          <tr key={car.id}>
            <td>{car.id}</td>
            <td>
              <img
                src={`caminho-para-suas-imagens/${car.imageUrl}`}
                alt={`Imagem do Carro ${car.model}`}
                width={50}
                height={50}
              />
            </td>
            <td>{car.model}</td>
            <td>{car.nextBooking}</td>
            <td>{car.status}</td>
            <td>
              {Array.from({ length: car.stars }, (_, index) => (
                <img
                  key={index}
                  src={`caminho-para-suas-imagens/estrela${index + 1}.jpg`}
                  alt={`Estrela ${index + 1}`}
                  width={20}
                  height={20}
                />
              ))}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
