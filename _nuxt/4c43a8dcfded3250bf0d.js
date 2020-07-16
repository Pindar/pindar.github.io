(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{205:function(e,n){e.exports={body:'<h2>Worum es geht</h2><br />\nXSLT ist eine auf XML basierte funktionale Sprache, die zur Umwandlung von XML-Dokumenten in eine andere XML bzw. Plaintextdarstellung dient. XSLT der Version 1.1 hat sich bereits auf breiter Front durchgesetzt und wird vom .Net-Framework 3.5 und Firefox unterst&uuml;zt. Die Nachfolgerversion 2.0, die einige n&uuml;tzliche Funktionalit&auml;ten bietet, ist bisher noch nicht so verbreitet. Das Framework <a href="http://saxon.sourceforge.net/" target="_blank">SAXON B</a> bietet ein, unter der <a title="MOZILLA PUBLIC LICENSE" href="http://www.mozilla.org/MPL/MPL-1.0.html" target="_blank">MPL 1.0</a> stehendes, Framework an, mit dem man die W3C-XSLT 2-Version verwenden kann.</p>\n<p>Um nun XML-Dokumente ganz einfach umwandeln zu k&ouml;nnen biete ich ein einfaches ausf&uuml;hrbares JAR-File an, das SAXON B der Version 9.1 verwendet und auf ein XML-Dokument ein XSLT-Dokument anwendet.<a id="more"></a><a id="more-57"></a></p>\n<h2>Wie es geht</h2><br />\nVoraussetzung sind ein XML-Dokument, ein XSLT-Dokument nach der <a href="http://www.w3.org/TR/xslt20/" target="_blank">XSLT 2.0 Spezifikation</a> und ein installiertes Java JRE 1.5 oder besser.</p>\n<ol>\n<li>Download der ZIP-Datei: <a href="http://www.pindarsign.de/itnotes/wp-content/uploads/2009/08/XSLT-Transformer.zip">XSLT-Transformer</a></li>\n<li>Entpacken der ZIP-Datei in ein beliebiges Verzeichnis.</li>\n<li>Umwandeln des XML-Dokuments mit dem XSLT-Dokument in das gew&uuml;nschte Zielformat durch folgenden Aufruf der Anwendung aus der Konsole (Windows: Start, Ausf&uuml;hren, CMD [ENTER]) heraus:<br />\njava -jar [Verzeichnis in der die jar-Datei liegt]XSLT-Transformer.jar "[XML-Dokument-Pfad]" "[XSLT-Dokument-Pfad]" > "[Output.xml-Pfad\\Output-Dateiname.xml]"</li><br />\n</ol><br />\nDas Zieldokument findet sich dann im angegebenen Verzeichnis. So einfach geht\'s!</p>\n<p><em>Update:</em></p>\n<p>Auf Wunsch gibt\'s noch eine zweite Version mit Parameter:</p>\n<ol>\n<li>Download der ZIP-Datei: <a href="http://www.pindarsign.de/itnotes/wp-content/uploads/2009/08/XSLT-TransformerV2_21.zip"></a><a href="http://www.pindarsign.de/itnotes/wp-content/uploads/2009/08/XSLT-TransformerV2_3.zip">XSLT-TransformerV2_3</a></li>\n<li>Entpacken der ZIP-Datei in ein beliebiges Verzeichnis.</li>\n<li>Umwandeln des XML-Dokuments mit dem XSLT-Dokument in das gew&uuml;nschte Zielformat durch folgenden Aufruf der Anwendung aus der Konsole (Windows: Start, Ausf&uuml;hren, CMD [ENTER]) heraus:<br />\njava -jar [Verzeichnis in der die jar-Datei liegt]XSLT-TransformerV2_3.jar -xml [XML-Dokument-Pfad] -xslt [XSLT-Dokument-Pfad] -out [Output.xml-Pfad]</li><br />\n</ol><br />\n<em>Changelog:</em></p>\n<ul>\n<li>v2.1: encoding utf-8 fixed</li>\n<li>v2.2: neuer optionaler Parameter -enc [encoding]. Ohne Angabe wird das Dokument in UTF-8 geschrieben.</li>\n<li>V2.3: Parameter -enc wieder entfernt; encoding wird jetzt anhand des encoding-Attributes im xsl:output-Element angepasst. Falls nicht vorhanden wird UTF-8 angenommen (wie im Standard festgelegt).</li><br />\n</ul><br />\n<em>Bekannte Bugs:</em></p>\n<ul>\n<li>Verwendung in XMLSpy auf Windows Vista: Outputdatei kann nicht angezeigt werden, es treten Fehler auf. XMLSpy auf&nbsp; Windows XP ist davon nicht betroffen.</li><br />\n</ul></p>\n',html:'<h2>Worum es geht</h2><br />\nXSLT ist eine auf XML basierte funktionale Sprache, die zur Umwandlung von XML-Dokumenten in eine andere XML bzw. Plaintextdarstellung dient. XSLT der Version 1.1 hat sich bereits auf breiter Front durchgesetzt und wird vom .Net-Framework 3.5 und Firefox unterst&uuml;zt. Die Nachfolgerversion 2.0, die einige n&uuml;tzliche Funktionalit&auml;ten bietet, ist bisher noch nicht so verbreitet. Das Framework <a href="http://saxon.sourceforge.net/" target="_blank">SAXON B</a> bietet ein, unter der <a title="MOZILLA PUBLIC LICENSE" href="http://www.mozilla.org/MPL/MPL-1.0.html" target="_blank">MPL 1.0</a> stehendes, Framework an, mit dem man die W3C-XSLT 2-Version verwenden kann.</p>\n<p>Um nun XML-Dokumente ganz einfach umwandeln zu k&ouml;nnen biete ich ein einfaches ausf&uuml;hrbares JAR-File an, das SAXON B der Version 9.1 verwendet und auf ein XML-Dokument ein XSLT-Dokument anwendet.<a id="more"></a><a id="more-57"></a></p>\n<h2>Wie es geht</h2><br />\nVoraussetzung sind ein XML-Dokument, ein XSLT-Dokument nach der <a href="http://www.w3.org/TR/xslt20/" target="_blank">XSLT 2.0 Spezifikation</a> und ein installiertes Java JRE 1.5 oder besser.</p>\n<ol>\n<li>Download der ZIP-Datei: <a href="http://www.pindarsign.de/itnotes/wp-content/uploads/2009/08/XSLT-Transformer.zip">XSLT-Transformer</a></li>\n<li>Entpacken der ZIP-Datei in ein beliebiges Verzeichnis.</li>\n<li>Umwandeln des XML-Dokuments mit dem XSLT-Dokument in das gew&uuml;nschte Zielformat durch folgenden Aufruf der Anwendung aus der Konsole (Windows: Start, Ausf&uuml;hren, CMD [ENTER]) heraus:<br />\njava -jar [Verzeichnis in der die jar-Datei liegt]XSLT-Transformer.jar "[XML-Dokument-Pfad]" "[XSLT-Dokument-Pfad]" > "[Output.xml-Pfad\\Output-Dateiname.xml]"</li><br />\n</ol><br />\nDas Zieldokument findet sich dann im angegebenen Verzeichnis. So einfach geht\'s!</p>\n<p><em>Update:</em></p>\n<p>Auf Wunsch gibt\'s noch eine zweite Version mit Parameter:</p>\n<ol>\n<li>Download der ZIP-Datei: <a href="http://www.pindarsign.de/itnotes/wp-content/uploads/2009/08/XSLT-TransformerV2_21.zip"></a><a href="http://www.pindarsign.de/itnotes/wp-content/uploads/2009/08/XSLT-TransformerV2_3.zip">XSLT-TransformerV2_3</a></li>\n<li>Entpacken der ZIP-Datei in ein beliebiges Verzeichnis.</li>\n<li>Umwandeln des XML-Dokuments mit dem XSLT-Dokument in das gew&uuml;nschte Zielformat durch folgenden Aufruf der Anwendung aus der Konsole (Windows: Start, Ausf&uuml;hren, CMD [ENTER]) heraus:<br />\njava -jar [Verzeichnis in der die jar-Datei liegt]XSLT-TransformerV2_3.jar -xml [XML-Dokument-Pfad] -xslt [XSLT-Dokument-Pfad] -out [Output.xml-Pfad]</li><br />\n</ol><br />\n<em>Changelog:</em></p>\n<ul>\n<li>v2.1: encoding utf-8 fixed</li>\n<li>v2.2: neuer optionaler Parameter -enc [encoding]. Ohne Angabe wird das Dokument in UTF-8 geschrieben.</li>\n<li>V2.3: Parameter -enc wieder entfernt; encoding wird jetzt anhand des encoding-Attributes im xsl:output-Element angepasst. Falls nicht vorhanden wird UTF-8 angenommen (wie im Standard festgelegt).</li><br />\n</ul><br />\n<em>Bekannte Bugs:</em></p>\n<ul>\n<li>Verwendung in XMLSpy auf Windows Vista: Outputdatei kann nicht angezeigt werden, es treten Fehler auf. XMLSpy auf&nbsp; Windows XP ist davon nicht betroffen.</li><br />\n</ul></p>\n',attributes:{layout:"post",status:"publish",published:!0,title:"(Download) Java XSLT 2.0 Transformator",author:"Simon Dittlmann",author_login:"Simon",author_email:"simon.dittlmann@itnotes.de",author_url:"http://www.itnotes.de",excerpt:'<h2>Worum es geht</h2>\r\nXSLT ist eine auf XML basierte funktionale Sprache, die zur Umwandlung von XML-Dokumenten in eine andere XML bzw. Plaintextdarstellung dient. XSLT der Version 1.1 hat sich bereits auf breiter Front durchgesetzt und wird vom .Net-Framework 3.5 und Firefox unterst&uuml;zt. Die Nachfolgerversion 2.0, die einige n&uuml;tzliche Funktionalit&auml;ten bietet, ist bisher noch nicht so verbreitet. Das Framework <a href="http://saxon.sourceforge.net/" target="_blank">SAXON B</a> bietet ein, unter der <a title="MOZILLA PUBLIC LICENSE" href="http://www.mozilla.org/MPL/MPL-1.0.html" target="_blank">MPL 1.0</a> stehendes, Framework an, mit dem man die W3C-XSLT 2-Version verwenden kann.\r\n\r\nUm nun XML-Dokumente ganz einfach umwandeln zu k&ouml;nnen biete ich ein einfaches ausf&uuml;hrbares JAR-File an, das SAXON B der Version 9.1 verwendet und auf ein XML-Dokument ein XSLT-Dokument anwendet.',wordpress_id:57,wordpress_url:"http://www.pindarsign.de/itnotes/?p=57",date:"2009-08-03 10:08:10 +0200",date_gmt:"2009-08-03 08:08:10 +0200",categories:["tools"],tags:["tool","xslt","xml"],comments:[{id:4,author:"Simon",author_email:"simon.dittlmann@itnotes.de",author_url:"http://www.itnotes.de",date:"2009-08-03 11:33:09 +0200",date_gmt:"2009-08-03 09:33:09 +0200",content:"PS: Da der Nutzen gegen&uuml;ber dem originalen SAXON B nicht ganz klar ist, ein kurzes Statement:\r\nIch hatte nach einer einfachen M&ouml;glichkeit zum umwandeln f&uuml;r meine Kollegen gesucht, ohne viele Optionen beim Aufruf des Programms. Ebenso sollte es ohne setzten des Classpath auskommen. Das origniale SAXON-Jar kann also prinzipiell mehr als mein XSLT-Transformer, daf&uuml;r ist die Einstiegsdokumentation etwas viel zu lesen, f&uuml;r jemanden, der nur schnell transformieren will.\r\n\r\nIn den kommenden Tagen werde ich eine kleine Silverlight Anwendung einbinden (wenn's hinhaut :) ), die auch einfach nur transformiert, die Usability aber noch etwas vereinfachen wird."}],_meta:{resourcePath:"/home/travis/build/Pindar/itnotes/contents/posts/2009-08-03-download-java-xslt-2-0-transformator.md"}},vue:{render:"return function render() { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0) }",staticRenderFns:'return [function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'div\',{staticClass:"dynamicMarkdown"},[_c(\'h2\',[_vm._v("Worum es geht")]),_c(\'br\'),_vm._v("\\nXSLT ist eine auf XML basierte funktionale Sprache, die zur Umwandlung von XML-Dokumenten in eine andere XML bzw. Plaintextdarstellung dient. XSLT der Version 1.1 hat sich bereits auf breiter Front durchgesetzt und wird vom .Net-Framework 3.5 und Firefox unterstüzt. Die Nachfolgerversion 2.0, die einige nützliche Funktionalitäten bietet, ist bisher noch nicht so verbreitet. Das Framework "),_c(\'a\',{attrs:{"href":"http://saxon.sourceforge.net/","target":"_blank"}},[_vm._v("SAXON B")]),_vm._v(" bietet ein, unter der "),_c(\'a\',{attrs:{"title":"MOZILLA PUBLIC LICENSE","href":"http://www.mozilla.org/MPL/MPL-1.0.html","target":"_blank"}},[_vm._v("MPL 1.0")]),_vm._v(" stehendes, Framework an, mit dem man die W3C-XSLT 2-Version verwenden kann."),_c(\'p\'),_vm._v(" "),_c(\'p\',[_vm._v("Um nun XML-Dokumente ganz einfach umwandeln zu können biete ich ein einfaches ausführbares JAR-File an, das SAXON B der Version 9.1 verwendet und auf ein XML-Dokument ein XSLT-Dokument anwendet."),_c(\'a\',{attrs:{"id":"more"}}),_c(\'a\',{attrs:{"id":"more-57"}})]),_vm._v(" "),_c(\'h2\',[_vm._v("Wie es geht")]),_c(\'br\'),_vm._v("\\nVoraussetzung sind ein XML-Dokument, ein XSLT-Dokument nach der "),_c(\'a\',{attrs:{"href":"http://www.w3.org/TR/xslt20/","target":"_blank"}},[_vm._v("XSLT 2.0 Spezifikation")]),_vm._v(" und ein installiertes Java JRE 1.5 oder besser."),_c(\'p\'),_vm._v(" "),_c(\'ol\',[_c(\'li\',[_vm._v("Download der ZIP-Datei: "),_c(\'a\',{attrs:{"href":"http://www.pindarsign.de/itnotes/wp-content/uploads/2009/08/XSLT-Transformer.zip"}},[_vm._v("XSLT-Transformer")])]),_vm._v(" "),_c(\'li\',[_vm._v("Entpacken der ZIP-Datei in ein beliebiges Verzeichnis.")]),_vm._v(" "),_c(\'li\',[_vm._v("Umwandeln des XML-Dokuments mit dem XSLT-Dokument in das gewünschte Zielformat durch folgenden Aufruf der Anwendung aus der Konsole (Windows: Start, Ausführen, CMD [ENTER]) heraus:"),_c(\'br\'),_vm._v("\\njava -jar [Verzeichnis in der die jar-Datei liegt]XSLT-Transformer.jar \\"[XML-Dokument-Pfad]\\" \\"[XSLT-Dokument-Pfad]\\" > \\"[Output.xml-Pfad\\\\Output-Dateiname.xml]\\"")]),_c(\'br\')]),_c(\'br\'),_vm._v("\\nDas Zieldokument findet sich dann im angegebenen Verzeichnis. So einfach geht\'s!"),_c(\'p\'),_vm._v(" "),_c(\'p\',[_c(\'em\',[_vm._v("Update:")])]),_vm._v(" "),_c(\'p\',[_vm._v("Auf Wunsch gibt\'s noch eine zweite Version mit Parameter:")]),_vm._v(" "),_c(\'ol\',[_c(\'li\',[_vm._v("Download der ZIP-Datei: "),_c(\'a\',{attrs:{"href":"http://www.pindarsign.de/itnotes/wp-content/uploads/2009/08/XSLT-TransformerV2_21.zip"}}),_c(\'a\',{attrs:{"href":"http://www.pindarsign.de/itnotes/wp-content/uploads/2009/08/XSLT-TransformerV2_3.zip"}},[_vm._v("XSLT-TransformerV2_3")])]),_vm._v(" "),_c(\'li\',[_vm._v("Entpacken der ZIP-Datei in ein beliebiges Verzeichnis.")]),_vm._v(" "),_c(\'li\',[_vm._v("Umwandeln des XML-Dokuments mit dem XSLT-Dokument in das gewünschte Zielformat durch folgenden Aufruf der Anwendung aus der Konsole (Windows: Start, Ausführen, CMD [ENTER]) heraus:"),_c(\'br\'),_vm._v("\\njava -jar [Verzeichnis in der die jar-Datei liegt]XSLT-TransformerV2_3.jar -xml [XML-Dokument-Pfad] -xslt [XSLT-Dokument-Pfad] -out [Output.xml-Pfad]")]),_c(\'br\')]),_c(\'br\'),_vm._v(" "),_c(\'em\',[_vm._v("Changelog:")]),_c(\'p\'),_vm._v(" "),_c(\'ul\',[_c(\'li\',[_vm._v("v2.1: encoding utf-8 fixed")]),_vm._v(" "),_c(\'li\',[_vm._v("v2.2: neuer optionaler Parameter -enc [encoding]. Ohne Angabe wird das Dokument in UTF-8 geschrieben.")]),_vm._v(" "),_c(\'li\',[_vm._v("V2.3: Parameter -enc wieder entfernt; encoding wird jetzt anhand des encoding-Attributes im xsl:output-Element angepasst. Falls nicht vorhanden wird UTF-8 angenommen (wie im Standard festgelegt).")]),_c(\'br\')]),_c(\'br\'),_vm._v(" "),_c(\'em\',[_vm._v("Bekannte Bugs:")]),_c(\'p\'),_vm._v(" "),_c(\'ul\',[_c(\'li\',[_vm._v("Verwendung in XMLSpy auf Windows Vista: Outputdatei kann nicht angezeigt werden, es treten Fehler auf. XMLSpy auf  Windows XP ist davon nicht betroffen.")]),_c(\'br\')]),_c(\'p\')]) }]',component:{data:function(){return{templateRender:null}},render:function(e){return this.templateRender?this.templateRender():e("div","Rendering")},created:function(){this.templateRender=function(){var e=this.$createElement;this._self._c;return this._m(0)},this.$options.staticRenderFns=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"dynamicMarkdown"},[t("h2",[e._v("Worum es geht")]),t("br"),e._v("\nXSLT ist eine auf XML basierte funktionale Sprache, die zur Umwandlung von XML-Dokumenten in eine andere XML bzw. Plaintextdarstellung dient. XSLT der Version 1.1 hat sich bereits auf breiter Front durchgesetzt und wird vom .Net-Framework 3.5 und Firefox unterstüzt. Die Nachfolgerversion 2.0, die einige nützliche Funktionalitäten bietet, ist bisher noch nicht so verbreitet. Das Framework "),t("a",{attrs:{href:"http://saxon.sourceforge.net/",target:"_blank"}},[e._v("SAXON B")]),e._v(" bietet ein, unter der "),t("a",{attrs:{title:"MOZILLA PUBLIC LICENSE",href:"http://www.mozilla.org/MPL/MPL-1.0.html",target:"_blank"}},[e._v("MPL 1.0")]),e._v(" stehendes, Framework an, mit dem man die W3C-XSLT 2-Version verwenden kann."),t("p"),e._v(" "),t("p",[e._v("Um nun XML-Dokumente ganz einfach umwandeln zu können biete ich ein einfaches ausführbares JAR-File an, das SAXON B der Version 9.1 verwendet und auf ein XML-Dokument ein XSLT-Dokument anwendet."),t("a",{attrs:{id:"more"}}),t("a",{attrs:{id:"more-57"}})]),e._v(" "),t("h2",[e._v("Wie es geht")]),t("br"),e._v("\nVoraussetzung sind ein XML-Dokument, ein XSLT-Dokument nach der "),t("a",{attrs:{href:"http://www.w3.org/TR/xslt20/",target:"_blank"}},[e._v("XSLT 2.0 Spezifikation")]),e._v(" und ein installiertes Java JRE 1.5 oder besser."),t("p"),e._v(" "),t("ol",[t("li",[e._v("Download der ZIP-Datei: "),t("a",{attrs:{href:"http://www.pindarsign.de/itnotes/wp-content/uploads/2009/08/XSLT-Transformer.zip"}},[e._v("XSLT-Transformer")])]),e._v(" "),t("li",[e._v("Entpacken der ZIP-Datei in ein beliebiges Verzeichnis.")]),e._v(" "),t("li",[e._v("Umwandeln des XML-Dokuments mit dem XSLT-Dokument in das gewünschte Zielformat durch folgenden Aufruf der Anwendung aus der Konsole (Windows: Start, Ausführen, CMD [ENTER]) heraus:"),t("br"),e._v('\njava -jar [Verzeichnis in der die jar-Datei liegt]XSLT-Transformer.jar "[XML-Dokument-Pfad]" "[XSLT-Dokument-Pfad]" > "[Output.xml-Pfad\\Output-Dateiname.xml]"')]),t("br")]),t("br"),e._v("\nDas Zieldokument findet sich dann im angegebenen Verzeichnis. So einfach geht's!"),t("p"),e._v(" "),t("p",[t("em",[e._v("Update:")])]),e._v(" "),t("p",[e._v("Auf Wunsch gibt's noch eine zweite Version mit Parameter:")]),e._v(" "),t("ol",[t("li",[e._v("Download der ZIP-Datei: "),t("a",{attrs:{href:"http://www.pindarsign.de/itnotes/wp-content/uploads/2009/08/XSLT-TransformerV2_21.zip"}}),t("a",{attrs:{href:"http://www.pindarsign.de/itnotes/wp-content/uploads/2009/08/XSLT-TransformerV2_3.zip"}},[e._v("XSLT-TransformerV2_3")])]),e._v(" "),t("li",[e._v("Entpacken der ZIP-Datei in ein beliebiges Verzeichnis.")]),e._v(" "),t("li",[e._v("Umwandeln des XML-Dokuments mit dem XSLT-Dokument in das gewünschte Zielformat durch folgenden Aufruf der Anwendung aus der Konsole (Windows: Start, Ausführen, CMD [ENTER]) heraus:"),t("br"),e._v("\njava -jar [Verzeichnis in der die jar-Datei liegt]XSLT-TransformerV2_3.jar -xml [XML-Dokument-Pfad] -xslt [XSLT-Dokument-Pfad] -out [Output.xml-Pfad]")]),t("br")]),t("br"),e._v(" "),t("em",[e._v("Changelog:")]),t("p"),e._v(" "),t("ul",[t("li",[e._v("v2.1: encoding utf-8 fixed")]),e._v(" "),t("li",[e._v("v2.2: neuer optionaler Parameter -enc [encoding]. Ohne Angabe wird das Dokument in UTF-8 geschrieben.")]),e._v(" "),t("li",[e._v("V2.3: Parameter -enc wieder entfernt; encoding wird jetzt anhand des encoding-Attributes im xsl:output-Element angepasst. Falls nicht vorhanden wird UTF-8 angenommen (wie im Standard festgelegt).")]),t("br")]),t("br"),e._v(" "),t("em",[e._v("Bekannte Bugs:")]),t("p"),e._v(" "),t("ul",[t("li",[e._v("Verwendung in XMLSpy auf Windows Vista: Outputdatei kann nicht angezeigt werden, es treten Fehler auf. XMLSpy auf  Windows XP ist davon nicht betroffen.")]),t("br")]),t("p")])}]}}}}}}]);