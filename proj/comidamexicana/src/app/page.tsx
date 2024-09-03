import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const pratosMexicanos = [
  {
    nome: "Tacos al Pastor",
    descricao: "Tacos de porco marinado com abacaxi, cebola e coentro",
    preco: "R$ 25,99",
    imagem: "/placeholder.svg?height=100&width=100"
  },
  {
    nome: "Guacamole",
    descricao: "Pasta de abacate fresco com tomate, cebola e suco de limão",
    preco: "R$ 18,99",
    imagem: "/placeholder.svg?height=100&width=100"
  },
  {
    nome: "Enchiladas",
    descricao: "Tortilhas de milho recheadas com frango, cobertas com molho picante e queijo",
    preco: "R$ 32,99",
    imagem: "/placeholder.svg?height=100&width=100"
  },
  {
    nome: "Quesadillas",
    descricao: "Tortilhas grelhadas recheadas com queijo derretido e carne à sua escolha",
    preco: "R$ 23,99",
    imagem: "/placeholder.svg?height=100&width=100"
  },
  {
    nome: "Chiles Rellenos",
    descricao: "Pimentões poblano recheados com queijo, empanados e fritos",
    preco: "R$ 28,99",
    imagem: "/placeholder.svg?height=100&width=100"
  },
  {
    nome: "Tamales",
    descricao: "Massa de milho cozida no vapor, recheada com carne e envolta em folha de milho",
    preco: "R$ 26,99",
    imagem: "/placeholder.svg?height=100&width=100"
  }
]

export default function PaginaComidaMexicana() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-100 to-yellow-200">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-green-800">Deliciosa Culinária Mexicana</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pratosMexicanos.map((prato, index) => (
            <Card key={index} className="overflow-hidden border-2 border-green-500 shadow-lg">
              <CardHeader className="p-0">
                <img src={prato.imagem} alt={prato.nome} className="w-full h-48 object-cover" />
              </CardHeader>
              <CardContent className="p-4 bg-white">
                <CardTitle className="text-xl mb-2 text-red-700">{prato.nome}</CardTitle>
                <p className="text-green-700 mb-4">{prato.descricao}</p>
                <p className="text-lg font-semibold text-yellow-600">{prato.preco}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}