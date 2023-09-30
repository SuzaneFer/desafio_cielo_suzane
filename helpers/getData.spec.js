import axios from 'axios';
import getData from './getData';
import SummaryMock from '../mocks/summaryMock';

jest.mock('axios');

describe('getData', () => {
  it('deve retornar os dados da API quando a chamada for bem-sucedida', async () => {
    axios.get.mockResolvedValue({ data: SummaryMock });

    const result = await getData();

    expect(result).toBe(SummaryMock);
  });

  it('deve retornar uma mensagem de erro quando a chamada à API falhar', async () => {
    axios.get.mockRejectedValue('Erro na chamada à API');

    const result = await getData();

    expect(result).toBe('Erro ao buscar os dados');
  });
});
