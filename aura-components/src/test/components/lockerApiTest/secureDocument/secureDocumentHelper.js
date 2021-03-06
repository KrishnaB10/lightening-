({
    testName: {
        "systemAPI": "HTMLDocument",
        "secureAPI": "SecureDocument"
    },
    testPlan: {
        "HTMLDocument" : {
            // Defined on Instance
            "location":                         {type: "Location" },
            // Defined on Proto
            "fgColor":                          {type: "string" },
            "linkColor":                        {type: "string" },
            "vlinkColor":                       {type: "string" },
            "alinkColor":                       {type: "string" },
            "bgColor":                          {type: "string" },
            "all":                              {type: "HTMLAllCollection", support: false },
            "clear":                            {type: "function" },
            "captureEvents":                    {type: "function" },
            "releaseEvents":                    {type: "function" }
        },
        "Document" : {
            "URL":                              {type: "string" },
            "activeElement":                    {type: "HTMLBodyElement" },
            "adoptNode":                        {type: "function" },
            "anchors":                          {type: "HTMLCollection" },
            "applets":                          {type: "HTMLCollection" },
            "body":                             {type: "HTMLBodyElement" },
            "caretRangeFromPoint":              {type: "function" },
            "characterSet":                     {type: "string" },
            "charset":                          {type: "string" },
            "childElementCount":                {type: "number" },
            "children":                         {type: "HTMLCollection" },
            "close":                            {type: "function" },
            "compatMode":                       {type: "string" },
            "contentType":                      {type: "string" },
            "cookie":                           {type: "string" },
            "createAttribute":                  {type: "function" },
            "createAttributeNS":                {type: "function" },
            "createCDATASection":               {type: "function" },
            "createComment":                    {type: "function" },
            "createDocumentFragment":           {type: "function" },
            "createElement":                    {type: "function" },
            "createElementNS":                  {type: "function" },
            "createEvent":                      {type: "function" },
            "createExpression":                 {type: "function" },
            "createNSResolver":                 {type: "function" },
            "createNodeIterator":               {type: "function" },
            "createProcessingInstruction":      {type: "function" },
            "createRange":                      {type: "function" },
            "createTextNode":                   {type: "function" },
            "createTreeWalker":                 {type: "function" },
            "currentScript":                    {type: "string", support: false },
            "defaultView":                      {type: "Window" },
            "designMode":                       {type: "string" },
            "dir":                              {type: "string" },
            "doctype":                          {type: "DocumentType" },
            "documentElement":                  {type: "HTMLHtmlElement" },
            "documentURI":                      {type: "string" },
            "domain":                           {type: "string" },
            "elementFromPoint":                 {type: "function" },
            "elementsFromPoint":                {type: "function" },
            "embeds":                           {type: "HTMLCollection" },
            "evaluate":                         {type: "function" },
            "execCommand":                      {type: "function" },
            "exitPointerLock":                  {type: "function" },
            "firstElementChild":                {type: "HTMLHtmlElement" },
            "fonts":                            {type: "FontFaceSet" },
            "forms":                            {type: "HTMLCollection" },
            "getElementById":                   {type: "function" },
            "getElementsByClassName":           {type: "function" },
            "getElementsByName":                {type: "function" },
            "getElementsByTagName":             {type: "function" },
            "getElementsByTagNameNS":           {type: "function" },
            "getSelection":                     {type: "function" },
            "hasFocus":                         {type: "function" },
            "head":                             {type: "HTMLHeadElement" },
            "hidden":                           {type: "boolean" },
            "images":                           {type: "HTMLCollection" },
            "implementation":                   {type: "DOMImplementation" },
            "importNode":                       {type: "function" },
            "inputEncoding":                    {type: "string" },
            "lastElementChild":                 {type: "HTMLHtmlElement" },
            "lastModified":                     {type: "string" },
            "links":                            {type: "HTMLCollection" },
            "onabort":                          {type : "@event" },
            "onautocomplete":                   {type : "@event" },
            "onautocompleteerror":              {type : "@event" },
            "onbeforecopy":                     {type : "@event" },
            "onbeforecut":                      {type : "@event" },
            "onbeforepaste":                    {type : "@event" },
            "onblur":                           {type : "@event" },
            "oncancel":                         {type : "@event" },
            "oncanplay":                        {type : "@event" },
            "oncanplaythrough":                 {type : "@event" },
            "onchange":                         {type : "@event" },
            "onclick":                          {type : "@event" },
            "onclose":                          {type : "@event" },
            "oncontextmenu":                    {type : "@event" },
            "oncopy":                           {type : "@event" },
            "oncuechange":                      {type : "@event" },
            "oncut":                            {type : "@event" },
            "ondblclick":                       {type : "@event" },
            "ondrag":                           {type : "@event" },
            "ondragend":                        {type : "@event" },
            "ondragenter":                      {type : "@event" },
            "ondragleave":                      {type : "@event" },
            "ondragover":                       {type : "@event" },
            "ondragstart":                      {type : "@event" },
            "ondrop":                           {type : "@event" },
            "ondurationchange":                 {type : "@event" },
            "onemptied":                        {type : "@event" },
            "onended":                          {type : "@event" },
            "onerror":                          {type : "@event" },
            "onfocus":                          {type : "@event" },
            "oninput":                          {type : "@event" },
            "oninvalid":                        {type : "@event" },
            "onkeydown":                        {type : "@event" },
            "onkeypress":                       {type : "@event" },
            "onkeyup":                          {type : "@event" },
            "onload":                           {type : "@event" },
            "onloadeddata":                     {type : "@event" },
            "onloadedmetadata":                 {type : "@event" },
            "onloadstart":                      {type : "@event" },
            "onmousedown":                      {type : "@event" },
            "onmouseenter":                     {type : "@event" },
            "onmouseleave":                     {type : "@event" },
            "onmousemove":                      {type : "@event" },
            "onmouseout":                       {type : "@event" },
            "onmouseover":                      {type : "@event" },
            "onmouseup":                        {type : "@event" },
            "onmousewheel":                     {type : "@event" },
            "onpaste":                          {type : "@event" },
            "onpause":                          {type : "@event" },
            "onplay":                           {type : "@event" },
            "onplaying":                        {type : "@event" },
            "onpointerlockchange":              {type : "@event" },
            "onpointerlockerror":               {type : "@event" },
            "onprogress":                       {type : "@event" },
            "onratechange":                     {type : "@event" },
            "onreadystatechange":               {type : "@event" },
            "onreset":                          {type : "@event" },
            "onresize":                         {type : "@event" },
            "onscroll":                         {type : "@event" },
            "onsearch":                         {type : "@event" },
            "onseeked":                         {type : "@event" },
            "onseeking":                        {type : "@event" },
            "onselect":                         {type : "@event" },
            "onselectionchange":                {type : "@event" },
            "onselectstart":                    {type : "@event" },
            "onshow":                           {type : "@event" },
            "onstalled":                        {type : "@event" },
            "onsubmit":                         {type : "@event" },
            "onsuspend":                        {type : "@event" },
            "ontimeupdate":                     {type : "@event" },
            "ontoggle":                         {type : "@event" },
	        "ontouchcancel":               	  	{type : "@event" },
	        "ontouchend":                	  	{type : "@event" },
	        "ontouchmove":                	  	{type : "@event" },
	        "ontouchstart":                	  	{type : "@event" },
            "onvolumechange":                   {type : "@event" },
            "onwaiting":                        {type : "@event" },
            "onwebkitfullscreenchange":         {type : "@event" },
            "onwebkitfullscreenerror":          {type : "@event" },
            "onwheel":                          {type : "@event" },
            "open":                             {type: "function" },
            "origin":                           {type: "string" },
            "plugins":                          {type: "HTMLCollection" },
            "pointerLockElement":               {type: "Null" },
            "preferredStylesheetSet":           {type: "Null" },
            "queryCommandEnabled":              {type: "function" },
            "queryCommandIndeterm":             {type: "function" },
            "queryCommandState":                {type: "function" },
            "queryCommandSupported":            {type: "function" },
            "queryCommandValue":                {type: "function" },
            "querySelector":                    {type: "function",
                                                 empty: {args: "#none", value: "null"},
                                                 opaque: {args: "#tic", value: "null"}
                                                },
            "querySelectorAll":                 {type: "function",
                                                 empty: {args: "#none", value: "{}"},
                                                 opaque: {args: "#tic", value: "{}"}
                                                },
            "readyState":                       {type: "string" },
            "referrer":                         {type: "string" },
            "registerElement":                  {type: "function" },
            "rootElement":                      {type: "Null" },
            "scripts":                          {type: "HTMLCollection" },
            "scrollingElement":                 {type: "HTMLBodyElement" },
            "selectedStylesheetSet":            {type: "Null" },
            "styleSheets":                      {type: "StyleSheetList" },
            "title":                            {type: "string" },
            "visibilityState":                  {type: "string" },
            "webkitCancelFullScreen":           {type: "function" },
            "webkitCurrentFullScreenElement":   {type: "Null" },
            "webkitExitFullscreen":             {type: "function" },
            "webkitFullscreenElement":          {type: "Null" },
            "webkitFullscreenEnabled":          {type: "boolean" },
            "webkitHidden":                     {type: "boolean" },
            "webkitIsFullScreen":               {type: "boolean" },
            "webkitVisibilityState":            {type: "string" },
            "write":                            {type: "function", support: false },
            "writeln":                          {type: "function", support: false },
            "xmlEncoding":                      {type: "Null" },
            "xmlStandalone":                    {type: "boolean" },
            "xmlVersion":                       {type: "Null" }
        },
	    "Node": {
		    "ATTRIBUTE_NODE":                 { type: "number" },
		    "CDATA_SECTION_NODE":             { type: "number" },
		    "COMMENT_NODE":                   { type: "number" },
		    "DOCUMENT_FRAGMENT_NODE":         { type: "number" },
		    "DOCUMENT_NODE":                  { type: "number" },
		    "DOCUMENT_POSITION_CONTAINED_BY": { type: "number" },
		    "DOCUMENT_POSITION_CONTAINS":     { type: "number" },
		    "DOCUMENT_POSITION_DISCONNECTED": { type: "number" },
		    "DOCUMENT_POSITION_FOLLOWING":    { type: "number" },
		    "DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC":
		                                      { type: "number" },
		    "DOCUMENT_POSITION_PRECEDING":    { type: "number" },
		    "DOCUMENT_TYPE_NODE":             { type: "number" },
		    "ELEMENT_NODE":                   { type: "number" },
		    "ENTITY_NODE":                    { type: "number" },
		    "ENTITY_REFERENCE_NODE":          { type: "number" },
		    "NOTATION_NODE":                  { type: "number" },
		    "PROCESSING_INSTRUCTION_NODE":    { type: "number" },
		    "TEXT_NODE":                      { type: "number" },
		    "appendChild":                    { type: "function" },
		    "baseURI":                        { type: "string" },
		    "childNodes":                     { type: "NodeList" },
		    "cloneNode":                      { type: "function" },
		    "compareDocumentPosition":        { type: "function" },
		    "contains":                       { type: "function" },
		    "firstChild":                     { type: "Null", skipOpaque : true, support : "@wip" },
		    "hasChildNodes":                  { type: "function", support : "@wip" },
		    "insertBefore":                   { type: "function" },
		    "isConnected":                    { type: "boolean", support : false },
		    "isDefaultNamespace":             { type: "function", support : false },
		    "isEqualNode":                    { type: "function" },
		    "isSameNode":                     { type: "function" },
		    "lastChild":                      { type: "Null", skipOpaque : true },
		    "lookupNamespaceURI":             { type: "function" },
		    "lookupPrefix":                   { type: "function" },
		    "nextSibling":                    { type: "Null", skipOpaque : true },
		    "nodeName":                       { type: "string" },
		    "nodeType":                       { type: "number" },
		    "nodeValue":                      { type: "Null" },
		    "normalize":                      { type: "function" },
		    "ownerDocument":                  { type: "HTMLDocument" },
		    "parentElement":                  { type: "Null", skipOpaque : true },
		    "parentNode":                     { type: "Null", skipOpaque : true },
		    "previousSibling":                { type: "Null", skipOpaque : true },
		    "removeChild":                    { type: "function" },
		    "replaceChild":                   { type: "function" },
		    "textContent":                    { type: "string" },
		},
		"EventTarget": {
			"addEventListener":               { type: "function" },
		    "dispatchEvent":                  { type: "function" },
		    "removeEventListener":            { type: "function" }
		}
    }
})