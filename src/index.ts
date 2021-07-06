import { StatusCodes } from 'http-status-codes'
import { TiposMensajes } from './tipos.enum'

type MensajeError = {
    httpStatus: StatusCodes,
    codigoInterno: number,
    desCodigoInterno: string,
    tipo: TiposMensajes,
    titulo: string,
    mensaje: string,
}
export class MensajesRespuesta {
  private MENSAJES: MensajeError[] = [
    {
      httpStatus: 200,
      codigoInterno: 155,
      desCodigoInterno: "Notaría creada exitosamente",
      mensaje: 'El elemento creada en la notaría ha sido exitoso',
      tipo: TiposMensajes.SUCCESS,
      titulo: 'Operación exitosa',
    },
  ]
  getMensajeRespuesta(index:number) {
    return this.MENSAJES[index];
  }
}