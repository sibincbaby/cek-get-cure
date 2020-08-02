function getLink() {
	var name='sibi';
	var bank='paytm';
	var paymentStr = "upi://pay?pa=" + name +
			"@" + bank +
			"&pn=" + $('#pn').val() +
			"&am=" + $('#am').val() +
	    		"&tn=" + "#fingerTips";;
	if ($('#am').val() !== '') {
		$('#paylink').find("span").html("Pay " + $('#pn').val() + " using UPI");
		$('#paylink').attr("href", encodeURI(paymentStr));
		$('[data-i18n = upiqrc-btn-pay]' ).text($.i18n( 'upiqrc-btn-pay', $('#pn').val() ));
	} else {
		$('#paylink').find("span").html("Pay ₹" + $('#am').val() + " to " + $('#pn').val() + " using UPI");
		$('#paylink').attr("href", encodeURI(paymentStr));
		$('[data-i18n = upiqrc-btn-pay]' ).text($.i18n( 'upiqrc-btn-pay-am', $('#pn').val(), $('#am').val() ));
	}
	$('#paylink').show();
	return paymentStr;
}

function getQRCode() {

	var paymentStr = getLink(),
		encodedPaymentStr = encodeURI(paymentStr);
	console.log(paymentStr);
	var options = {
		text : encodedPaymentStr,
		mode : 4,
		minVersion : 5,
		mSize : 0.1,
		mPosX : 0.5,
		mPosY : 0.5,
		image : $('#upilogo')[0]
	};
	var name="sibi";
	var bank ="paytm";
	$('#payQRCode').html('');
	$('#payQRCode').qrcode(options);
	$('#printVPA').html('UPI : ' + name + "@" + bank)
	$('#DownloadQRCode').show();
	$('#upifulllogo').show();
	$('#PrintQRCode').show();
}

function getEncodedString(val) {
	$('#am').val = val;
	paymentStr = getLink();
	return encodeURI(paymentStr);

}

function generatePhoneQRCode() {
	getQRCode();
}

function getQRCodeList() {
	$('#payQRCodeAny').qrcode(getEncodedString(''));
	$('#payQRCode10').qrcode(getEncodedString(10));
	$('#payQRCode20').qrcode(getEncodedString(20));
	$('#payQRCode50').qrcode(getEncodedString(50));
	$('#payQRCode100').qrcode(getEncodedString(100));
	$('#payQRCode200').qrcode(getEncodedString(200));
	$('#payQRCode500').qrcode(getEncodedString(500));
	$('#payQRCode1000').qrcode(getEncodedString(1000));
	$('#QRCodesTable').show();
}

function copyHTMLSnippet() {
	$('#htmllink').val($('#paylink').html());
	$('#htmllink').show();
}


