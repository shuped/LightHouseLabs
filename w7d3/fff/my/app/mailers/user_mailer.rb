class UserMailer < ApplicationMailer
  default from: 'no-reply@jungle.com'

  def receipt_email(order, lineitems)
    @lineitems = lineitems
    mail(to: 'order.email', subject: 'Thanks for your order!')
  end
end