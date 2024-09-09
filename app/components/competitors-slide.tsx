import Image from "next/image";

export function Competitors() {
  return <div className="overflow-y-scroll max-h-[80vh] text-blue-600">
    <h2 className="text-2xl sm:text-4xl font-bold mb-2 sm:mb-8 sm:text-center">
      Why are we better than our competitors?
    </h2>
    <p className="text-xl sm:text-2xl sm:text-center">
      We identified 7 competitors so far (production of customized artificial intelligence applications):
    </p>
    <div>
      <table className="w-full border-collapse">
        <tr className="bg-gray-100">
          <th className="border p-2 text-left">Feature</th>
          <th className="border p-2 text-left bg-sky-300"><img src="/logo_dark.svg" alt="Hyko" className="w-8 h-8 inline-block mr-2" /> Hyko</th>
          <th className="border p-2 text-left"><img src="/competitors/langflow.svg" alt="LangFlow" className="w-8 h-8 inline-block mr-2" /> LangFlow</th>

          <th className="border p-2 text-left"><img src="/competitors/8n8.svg" alt="8n8" className="w-8 h-8 inline-block mr-2" /> 8n8</th>
          <th className="border p-2 text-left"><img src="/competitors/zapier.svg" alt="Zapier" className="w-8 h-8 inline-block mr-2" /> Zapier</th>
          <th className="border p-2 text-left"><img src="/competitors/make.svg" alt="Make" className="w-8 h-8 inline-block mr-2" /> Make</th>
          <th className="border p-2 text-left"><img src="/competitors/instill.svg" alt="Instill" className="w-8 h-8 inline-block mr-2" /> Instill</th>
          <th className="border p-2 text-left"><img src="/competitors/gumloop.svg" alt="Gumloop" className="w-8 h-8 inline-block mr-2" /> Gumloop</th>
          <th className="border p-2 text-left"><img src="/competitors/mind-studio.svg" alt="Mind studio" className="w-8 h-8 inline-block mr-2" /> Mind studio</th>
        </tr>
        <tr>
          <td className="border p-2">User friendly blueprint builder</td>
          <td className="border p-2"><span className="text-green-500 text-xl">&#10003;</span></td>
          <td className="border p-2"><span className="text-green-500 text-xl">&#10003;</span></td>
          <td className="border p-2"></td>
          <td className="border p-2"><span className="text-green-500 text-xl">&#10003;</span></td>
          <td className="border p-2"></td>
          <td className="border p-2"><span className="text-green-500 text-xl">&#10003;</span></td>
          <td className="border p-2"></td>
          <td className="border p-2"></td>
        </tr>
        <tr className="bg-gray-50">
          <td className="border p-2">Access to AI APIs</td>
          <td className="border p-2"><span className="text-green-500 text-xl">&#10003;</span></td>
          <td className="border p-2">Only LLMs</td>
          <td className="border p-2"></td>
          <td className="border p-2"><span className="text-green-500 text-xl">&#10003;</span></td>
          <td className="border p-2"><span className="text-green-500 text-xl">&#10003;</span></td>
          <td className="border p-2"><span className="text-green-500 text-xl">&#10003;</span></td>
          <td className="border p-2"></td>
          <td className="border p-2"><span className="text-green-500 text-xl">&#10003;</span></td>
        </tr>
        <tr>
          <td className="border p-2">3rd parties integrations</td>
          <td className="border p-2"><span className="text-green-500 text-xl">&#10003;</span></td>
          <td className="border p-2"></td>
          <td className="border p-2"><span className="text-green-500 text-xl">&#10003;</span></td>
          <td className="border p-2"><span className="text-green-500 text-xl">&#10003;</span></td>
          <td className="border p-2"><span className="text-green-500 text-xl">&#10003;</span></td>
          <td className="border p-2"></td>
          <td className="border p-2"><span className="text-green-500 text-xl">&#10003;</span></td>
          <td className="border p-2"><span className="text-green-500 text-xl">&#10003;</span></td>
        </tr>
        <tr className="bg-gray-50">
          <td className="border p-2">Interactive nodes</td>
          <td className="border p-2"><span className="text-green-500 text-xl">&#10003;</span></td>
          <td className="border p-2"></td>
          <td className="border p-2"></td>
          <td className="border p-2"></td>
          <td className="border p-2"></td>
          <td className="border p-2"></td>
          <td className="border p-2"><span className="text-green-500 text-xl">&#10003;</span></td>
          <td className="border p-2"></td>
        </tr>
        <tr>
          <td className="border p-2">App ui builder</td>
          <td className="border p-2"><span className="text-green-500 text-xl">&#10003;</span></td>
          <td className="border p-2"></td>
          <td className="border p-2"></td>
          <td className="border p-2"></td>
          <td className="border p-2"></td>
          <td className="border p-2"></td>
          <td className="border p-2"><span className="text-green-500 text-xl">&#10003;</span></td>
          <td className="border p-2"></td>
        </tr>
        <tr className="bg-gray-50">
          <td className="border p-2">Batch mode</td>
          <td className="border p-2"><span className="text-green-500 text-xl">&#10003;</span></td>
          <td className="border p-2"></td>
          <td className="border p-2"></td>
          <td className="border p-2"></td>
          <td className="border p-2"></td>
          <td className="border p-2"></td>
          <td className="border p-2"><span className="text-green-500 text-xl">&#10003;</span></td>
          <td className="border p-2"></td>
        </tr>
        <tr>
          <td className="border p-2">Support for Image/Video/Audio/PDF...</td>
          <td className="border p-2"><span className="text-green-500 text-xl">&#10003;</span></td>
          <td className="border p-2"></td>
          <td className="border p-2"></td>
          <td className="border p-2"></td>
          <td className="border p-2"></td>
          <td className="border p-2"></td>
          <td className="border p-2"></td>
          <td className="border p-2"></td>
        </tr>
      </table>
    </div>
  </div>
}
