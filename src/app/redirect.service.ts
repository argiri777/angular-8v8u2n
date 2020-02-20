import { Injectable } from '@angular/core';

@Injectable()
export class RedirectService {

  constructor() { }

  public post(obj,url) {
      var mapForm = document.createElement("form");
      mapForm.target = "_blank";
      mapForm.method = "POST"; // or "post" if appropriate
      mapForm.action = url;
      Object.keys(obj).forEach(function(key){
        console.log(key, obj[key]);
        var mapInput = document.createElement("input");
        mapInput.type = "hidden";
        mapInput.name = key;
        mapInput.setAttribute("value", obj[key]);
        mapForm.appendChild(mapInput);
    });
    document.body.appendChild(mapForm);
    mapForm.submit();
  }

 public get(obj,url) {
      var mapForm = document.createElement("form");
      mapForm.target = "_blank";
      mapForm.method = "GET"; // or "post" if appropriate
      mapForm.action = url;
      Object.keys(obj).forEach(function(key){
        console.log(key, obj[key]);
        var mapInput = document.createElement("input");
        mapInput.type = "hidden";
        mapInput.name = key;
        mapInput.setAttribute("value", obj[key]);
        mapForm.appendChild(mapInput);
    });
    document.body.appendChild(mapForm);
    mapForm.submit();
  }
}