class UserMailer < ApplicationMailer
  default from: 'no-reply@jungle.com'

  def receipt_email(order, lineitems)
    @lineitems = lineitems
    @order = order
    mail(to: @order.email, subject:'Order Number: ' +  @order.id.to_s)
  end
end
