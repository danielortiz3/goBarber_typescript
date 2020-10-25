import ISendMailDTO from '@shared/container/providers/MailProvider/models/dtos/ISendMailDTO';

export default interface IMailProvider {
  sendMail(data: ISendMailDTO): Promise<void>;
}
