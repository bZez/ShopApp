var db;

$(document).ready(function(e) 
{
	db = window.openDatabase("PromotorDirectoryDB","1.0", "LocalVolcafeDB", 2 * 1024 * 1024);      
});



function Mensage( texto )
{
	/*$("#loadingAJAX").show();
	$("#ajaxgif").hide();*/
	new Messi(texto, 
	{
		title: 'Volcafe', 
		width: (window.innerWidth - 25),
		callback: function(val)
		{
			alert(val);
			$("#loadingAJAX").hide();
			$("#ajaxgif").show();
		}
	});
}

function Redirect ( x )
{
	switch (x)
	{
		case 0:
			if (!window.sessionStorage.UserLogin)
				window.location = "#page-LogIn";
			else
			{
				new Messi('&iquest;Desea Cerrar Sesi&oacute;n?', 
				{
					title: 'Shopp App', 
					width: (window.innerWidth - 25),
					buttons: 
						[
							{
								id: 0, 
								label: 'Si', 
								val: 'Y'
							}, 
							{
								id: 1, 
								label: 'No', 
								val: 'N'
							}
						], 
					callback: function(val) 
					{ 
						if (val == 'Y')
						{
							window.sessionStorage.removeItem("UserLogin");
							window.location = "index.html";
						}
					}
				});
			}
			break;
		case 1:
			window.location = "#hogar-sala";
			break;
		case 3:
			window.location = "#view-itemPagina";
			$("#VItemTitle").text('Hola');
			$("#VItemImage").attr('src','img/DB/Sala/photo2.jpg' );
			$("#VIPrice").text('Q 333');
			$("#VIDesc").text('Hola');
			break;
	}
}

function viewItemPagina( title, price, desc, urlImage )
{
	window.location = "#view-itemPagina";
	$("#VItemTitle").text(title);
	$("#VItemImage").attr('src',urlImage );
	$("#VIPrice").text(price);
	$("#VIDesc").text(desc);
}