class AppError {
  private _mensagem: string;
  private _status: number;

  constructor (mensagem: string, status = 400) {
      this._mensagem = mensagem;
      this._status = status;
  }

  get mensagem() {
      return this._mensagem;
  }

  get status() {
      return this._status;
  }
}

export { AppError };