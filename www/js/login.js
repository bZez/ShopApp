function ValEntrada ()
{
	//var UCode = $("#tbUserCode").val();
	var UName = $("#tbUserName").val();
	var UPwd  = $("#tbUserPassWord").val();
	
	var NCerrarS = $("#cbSesionPermanete").is(":checked");
	
	if (UName == "" || UPwd == "")
	new Messi('Todos los campos son requeridos.', 
				{
					title: 'Shop App', 
					titleClass: 'anim error', 
					buttons: 
						[
							{
								id: 0, 
								label: 'Cerrar', 
								val: 'X'
							}
						],
					modal: true,
					width: (window.innerWidth - 25)
				});
	else
	{
		$("#loadingAJAX").show();
		
		$(document).delay(1000);
		
		if (UName == "daguila" || UPwd == "123")
		{
			window.sessionStorage.UserLogin = UName;
			
			var Mensage = 'Hola. ' + UName;
				
				new Messi(Mensage, 
				{
					title: 'Shop App', 
					titleClass: 'success', 
					buttons: 
						[
							{
								id: 0, 
								label: 'Close', 
								val: 'X'
							}
						],
					modal: true,
					width: (window.innerWidth - 25),
					callback: function (info)
					{
						window.location="index.html";
					}
				});
		}
		else
		{
			new Messi('Error al Iniciar Sesi&oacute;n...', 
				{
					title: 'Shop App', 
					titleClass: 'anim error', 
					buttons: 
						[
							{
								id: 0, 
								label: 'Cerrar', 
								val: 'X'
							}
						],
					modal: true,
					width: (window.innerWidth - 25)
				});
		}
		
		$("#loadingAJAX").hide();

	}
}
