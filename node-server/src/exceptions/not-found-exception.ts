import HttpException from './http-exception';

class NotFoundException extends HttpException {
  constructor() {
    super(404, 'Not found from exception!');
  }
}

export default NotFoundException;
