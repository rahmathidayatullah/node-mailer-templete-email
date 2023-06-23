
const html = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
    <style>
        body {
            background-color: #F5F5F5;
            font-family: "Roboto Condensed", Helvetica, Arial, sans-serif;
            -webkit-font-smoothing: antialiased;
            font-size: 16px;
            line-height: 18px;
            margin: 0;
            padding: 0;
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%;
        }

        .body,
        table {
            width: 100%;
        }

        .container {
            box-sizing: border-box;
            display: block;
            margin: 0 auto;
            max-width: 660px;
            padding: 10px;
            text-align: center;
            background-color: #fff;
        }

        .sub-title td {
            font-weight: 600;
        }

        .text-center {
            text-align: center;
        }

        .text-left {
            text-align: left !important;
        }

        .pt-3 {
            padding-top: 1rem;
        }

        .pt-5 {
            padding-top: 3rem;
        }

        .lead-2 {
            font-size: 1.125rem !important;
            font-weight: 600;
        }

        .table-contact {
            text-align: left;
            padding-top: 10px;
            width: 100%;
        }

        .table-contact tr td {
            padding: 10px 0px;
        }

        .order-detail {
            background-color: rgb(243, 244, 245);
            border-radius: 0.75rem;
        }

        .order-detail tr:first-child td {
            padding-top: 30px !important;
        }

        .order-detail tr:last-child td {
            padding-bottom: 30px !important;
        }

        .order-detail tr td {
            padding: 12px 11px 12px 13px;
            text-align: left;
        }

        /* table payment */
        .table-payment {
            border-collapse: separate;
            border-spacing: 0px;
            padding: 16px 0px 0px 0px;
            text-align: left;
            font-size: 12px;
        }

        .table-payment tr.border-bottom-body td,
        table tr td.separate {
            border-bottom: 1px solid #e6e6e6;
        }

        .table-payment tr th {
            color: #000000;
            padding: 8px 10px 8px 10px;
            text-align: left;
            font-weight: 400;
        }

        .table-payment tr.border-bottom td {
            border-bottom: 1px solid #e6e6e6;
        }

        .table-payment tr.border-bottom td {
            font-weight: 600;
        }

        .table-payment tr.title-desc td {
            font-weight: 400 !important;
            color: #000000;
            padding-top: 1rem;
            padding-bottom: 1rem;
        }

        .table-payment td {
            padding: 17px 10px 8px 10px;
            font-weight: 600;
            vertical-align: top;
        }

        .table-payment tfoot td {
            border-top: 1px solid #e6e6e6;
            border-spacing: 0px;
        }

        hr.line {
            border: 1px solid #e6e6e6;
        }

        .fw-600 {
            font-weight: 600 !important;
        }

        .mb-2 {
            margin-bottom: 0.5rem;
        }

        .no-wrap {
            white-space: nowrap;
        }

        .contact-us {
            text-decoration: none;
        }

        .text-orange {
            color: #f47820;
        }

        .pt-5px {
            padding-top: 5px;
        }

        .p-10-0 {
            padding: 10px 0px;
        }

        .title-subtotal {
            text-align: right;
            padding-right: 20px;
        }

        .font-size-12px {
            font-size: 12px;
        }

        .font-size-18px {
            font-size: 18px;
        }

        .sub-table-payment {
            width: 100%;
        }

        .sub-table-payment tr td {
            padding: 0 !important;
            padding-top: 15px !important;
            border: none !important;
        }

        .sub-table-payment tr:first-child td {
            padding-top: 0 !important;
        }

        .sub-table-payment tr td:first-child {
            min-width: 142px;
        }

        .sub-table-payment tr td:last-child {
            width: 150px;
            white-space: nowrap;
        }
        .wrapper-notice-repayment{
            background: #EEF1FB; 
            border-radius: 4px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .wrapper-notice-repayment p{
            font-size: 12px;
            text-align: center;
            width: 100%;
        }
        .wrapper-notice-repayment p span{
            font-weight: 600;
        }

    </style>
</head>

<body>
    <table class="body" cellpadding="0" cellspacing="0">
        <thead>
            <tr>
                <td class="container">
                    <!-- <img src="{{URL_BLOB}}logo-trac/new-logo.png" width="100px" alt="" /> -->
                    <table class="pt-5px">
                        <tr>
                            <td>
                                <h2 class="mb-2">Advance Payment Receipt</h2>
                            </td>
                        </tr>
                        <tr>
                            <td class="pt-3">Receipt Number: INV-DP/83758</td>
                        </tr>
                        <tr>
                            <td class="pt-3">Reservation No: TRAC-2393838949494948</td>
                        </tr>
                        <tr>
                            <td class="pt-3">Date: 06 Nov 2021 11:30</td>
                        </tr>
                        <tr>
                            <td class="text-left">
                                <div class="lead-2 pt-5">Contact Detail</div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <table class="table-contact" cellpadding="0" cellspacing="0">
                                    <tr>
                                        <td>Name:</td>
                                        <td>Yoshendi Bram</td>
                                    </tr>
                                    <tr>
                                        <td>Email:</td>
                                        <td>Yoshendibram@gmail.com</td>
                                    </tr>
                                    <tr>
                                        <td>Contact:</td>
                                        <td>0846738117388</td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td class="text-left">
                                <div class="lead-2 pt-5">Order Detail</div>
                            </td>
                        </tr>
                        <tr>
                            <td class="p-10-0">
                                <table class="order-detail" cellpadding="0" cellspacing="0">
                                    <tr>
                                        <td>Name:</td>
                                        <td>Yoshendi Bram</td>
                                    </tr>
                                    <tr>
                                        <td>Service:</td>
                                        <td>Bus Rental</td>
                                    </tr>
                                    <tr>
                                        <td>Booking ID:</td>
                                        <td>SR0383949489303</td>
                                    </tr>
                                    <tr>
                                        <td>Duration:</td>
                                        <td> 6 Days</td>
                                    </tr>
                                    <tr>
                                        <td>Start Date:</td>
                                        <td>24 Feb 2021 07:00</td>
                                    </tr>
                                    <tr>
                                        <td>End Date:</td>
                                        <td>30 Feb 2021 10:00</td>
                                    </tr>
                                    <tr>
                                        <td>Pick Up:</td>
                                        <td>Sunter Mall</td>
                                    </tr>
                                    <tr>
                                        <td>Pick Up Notes:</td>
                                        <td>-</td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td class="text-left">
                                <div class="lead-2 pt-5">PAYMENT DETAILS</div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <table class="table-payment">
                                    <thead>
                                        <tr>
                                            <th>Payment Method</th>
                                            <th colspan="2">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="border-bottom">
                                            <td>Bank BCA</td>
                                            <td colspan="2">Paid</td>
                                            <td colspan="2"></td>
                                        </tr>
                                        <tr class="title-desc border-bottom-body">
                                            <td>Service Name</td>
                                            <td colspan="2" style="min-width: 142px">Description</td>
                                            <td style="width: 150px">Price</td>
                                        </tr>
                                        <tr>
                                            <td>Bus Rental</td>
                                            <td colspan="2">Medium Bus 29</td>
                                            <td class="no-wrap">Rp. 8.000.000</td>
                                        </tr>
                                        <tr>
                                            <td>Extra</td>
                                            <td colspan="2">Pillow</td>
                                            <td class="no-wrap">Rp. 50.000</td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td colspan="2">Pillow</td>
                                            <td class="no-wrap">Rp. 50.000</td>
                                        </tr>
                                        <tr class="border-bottom">
                                            <td>Voucher</td>
                                            <td colspan="2">Nama Voucher</td>
                                            <td class="no-wrap">Rp. 50.000</td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td class="title-subtotal">Total Price</td>
                                            <td class="no-wrap">Rp. 16.000.000
                                            </td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td class="title-subtotal">Total DP</td>
                                            <td class="no-wrap">Rp. 4.000.000
                                            </td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td class="title-subtotal">Amount Due</td>
                                            <td class="no-wrap text-orange">Rp. 12.000.000
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan="4">
                                                <div class="wrapper-notice-repayment">
                                                    <p>Please make re-payment before: <span>12 January 2023 at 16:00</span></p>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td class="separate"></td>
                        </tr>
                        <tr>
                            <td style="padding-top: 2rem; font-size: 12px;">
                                This email was generates automatically. Please do not reply,
                                if you need assistance please
                                <a href="https://www.trac.astra.co.id/support/hubungi-kami"
                                    class="contact-us text-orange">contact us</a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p class="lead-2 fw-600" style="font-size: 18px;">
                                    You preferred partner in transportation solution
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <a href="https://www.trac.astra.co.id/support/hubungi-kami" class="contact-us"><img
                                        src="https://tracomni.blob.core.windows.net/logo-trac/footer_new.png"
                                        width="220px" alt="" /></a>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </thead>
    </table>
</body>

</html>
`
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'rahmathidayatullah996@gmail.com',
    // diambil dari email di settings -> privasi -> search password app -> generate password
    // bukan password dari gmail
    pass: 'kytjmufujngvaxfo'
  }
});

var mailOptions = {
  from: 'rahmathidayatullah996@gmail.com',
  to: 'rahmat.hidayatullah@indocyber.id',
  subject: 'Sending Email using Node.js',
  html: html,
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
