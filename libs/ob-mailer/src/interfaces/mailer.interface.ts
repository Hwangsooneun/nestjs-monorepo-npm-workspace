interface MailerInterface {
  productName: string;
  startDd: string | Date;
  endDd: string | Date;
  userEmail: string;
}

export interface MailerTermination extends MailerInterface {
  isTrial: boolean;
  cardName?: string;
  scheduleDd?: string | Date;
  paidAt?: string | Date;
  refundPrice?: number;
  refundedAt?: string | Date;
}
