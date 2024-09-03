import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight, BarChart2, Database, Brain, Code, Star } from "lucide-react"
import Image from "next/image"

export default function DataScienceJoao() {
  return (
    <div className="flex flex-col min-h-screen bg-yellow-50">
      <header className="bg-blue-600 text-yellow-300 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <BarChart2 className="w-8 h-8" />
            <span className="text-2xl font-bold">Data Science com Prof. João</span>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:text-yellow-100">Início</a></li>
              <li><a href="#" className="hover:text-yellow-100">Curso</a></li>
              <li><a href="#" className="hover:text-yellow-100">Sobre</a></li>
              <li><a href="#" className="hover:text-yellow-100">Contato</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section className="bg-blue-500 text-yellow-100 py-20">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Aprenda Data Science com o Prof. João</h1>
            <p className="text-xl mb-8">Domine Python e as técnicas mais avançadas de análise de dados</p>
            <Button className="bg-yellow-400 text-blue-800 hover:bg-yellow-300">
              Inscreva-se Agora <ChevronRight className="ml-2" />
            </Button>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <Image
                src="/1706299816039.jfif"
                alt="Professor João"
                width={300}
                height={300}
                className="rounded-full border-4 border-blue-500"
              />
            </div>
            <div className="md:w-2/3 md:pl-8">
              <h2 className="text-3xl font-bold text-blue-800 mb-4">Conheça o Professor João</h2>
              <p className="text-lg text-gray-700 mb-4">
                Com mais de 15 anos de experiência em Data Science e Machine Learning, o Professor João
                é reconhecido internacionalmente por sua habilidade em tornar conceitos complexos
                acessíveis a todos. Sua paixão pelo ensino e expertise em Python fazem deste curso
                uma experiência única e enriquecedora.
              </p>
              <p className="text-lg text-gray-700">
                Formado em Ciência da Computação e com PhD em Inteligência Artificial, João já
                trabalhou em projetos para grandes empresas de tecnologia e agora dedica-se a
                formar a próxima geração de cientistas de dados.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-blue-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">O que você vai aprender</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Python para Data Science", icon: Code, description: "Fundamentos de Python e bibliotecas essenciais como NumPy e Pandas." },
                { title: "Visualização de Dados", icon: BarChart2, description: "Técnicas avançadas de visualização com Matplotlib e Seaborn." },
                { title: "Machine Learning", icon: Brain, description: "Algoritmos de ML e uso prático com Scikit-learn." },
                { title: "Big Data com Python", icon: Database, description: "Processamento de grandes volumes de dados usando PySpark." },
              ].map((topic, index) => (
                <Card key={index} className="bg-white border-2 border-blue-200 hover:border-yellow-400 transition-colors">
                  <CardHeader className="flex flex-col items-center">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <topic.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-blue-800 mt-4">{topic.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-gray-600">{topic.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-yellow-100">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">O que dizem os alunos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: "Maria Silva", comment: "O Professor João tem um dom para explicar conceitos complexos de forma simples e envolvente." },
                { name: "Carlos Oliveira", comment: "Este curso transformou minha carreira. Agora trabalho como cientista de dados em uma grande empresa de tecnologia." },
                { name: "Ana Rodrigues", comment: "A abordagem prática do Professor João me ajudou a aplicar o que aprendi imediatamente no meu trabalho." },
              ].map((testimonial, index) => (
                <Card key={index} className="bg-white">
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4">"{testimonial.comment}"</p>
                    <p className="font-semibold text-blue-800">{testimonial.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-blue-600 text-yellow-100 py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 Data Science com Prof. João. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}