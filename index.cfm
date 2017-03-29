<html>
  <head>
  </head>
  <body>

    <cfset  key="AIzaSyAznbvDurexM07W9IAG88NvOnL86w3d4GE">
    <cfset  cx="006573718856532854163:iixi72bqmwm">

    <cfif IsDefined("txt_Search")>
      <cfhttp url="https://www.googleapis.com/customsearch/v1?cx=#cx#&key=#key#&q=#txt_Search#" method="get" result="httpResp" timeout="120">
      <cfset cfData=DeserializeJSON(httpResp.filecontent)>

      <cfoutput>

        <cfform action="index.cfm" method="POST">
          <cfinput type="Text" name="txt_Search" value="#txt_Search#">
          <cfinput type="Submit" name="SubmitForm" value="Submit">
        </cfform>

        <cfloop from="1" to="10" index="i">
          <a href="#cfData.items[i].link#">#cfData.items[i].htmlTitle#</a><br>
          #cfData.items[i].link#<br>
          #cfData.items[i].htmlSnippet#<br><br>
        </cfloop>

      </cfoutput>

      <cfelse>
        <cfoutput>
          <cfform action="index.cfm" method="POST">
            <cfinput type="Text" name="txt_Search">
            <cfinput type="Submit" name="SubmitForm" value="Submit">
          </cfform>
        </cfoutput>
    </cfif>

  </body>
</html>
