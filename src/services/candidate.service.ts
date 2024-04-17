
import csvParser from 'csv-parser';
import candidateRepository from '../repositories/candidate.repository';
import { Readable, Transform, Writable,pipeline } from 'stream';
import { promisify } from 'util';
const pipelineAsync=promisify(pipeline);
const candidateService = {
  importCandidates: async (req: any) => {
    interface Candidate {
      nome: string;
      idade: number;
      telefone: string;
      email: string;
      etnia: string;
      genero: string;
      graduacao: string;
      senioridade: string;
      cidade: string;
      bairro: string;
      estado: string;
      pcd: boolean;
      infos_tecnicas: string;
      funcionario_interno: string;
    }
    if (!req.file) {
      throw new Error('No file uploaded');
    }
    let batch:Candidate[] = [];
    const readableFile= new Readable();
    readableFile.push(req.file.buffer);
    readableFile.push(null);
    console.log(req.file.buffer);
    const convertLine= new Transform({
      objectMode:true,
      transform(chunk,encoding,callback){
        try{
          const candidateData:Candidate= {
            nome:chunk.nome,
            idade:Number(chunk.idade),            
            telefone:chunk.telefone,         
            email:chunk.email,             
            etnia:chunk.etnia,             
            genero:chunk.genero,            
            graduacao:chunk.graduacao,         
            senioridade:chunk.senioridade,        
            cidade:chunk.cidade,             
            bairro :chunk.bairro,           
            estado:chunk.estado,           
            pcd:Boolean(chunk.pcd),              
            infos_tecnicas:chunk.infos_tecnicas,     
            funcionario_interno:chunk.funcionario_interno
          };
          callback(null,candidateData);
        }catch(error){
          console.error('Error transforming chunk:', error);
        };
      }, 
    });
   const saveCsvInDB=new Writable({
      objectMode:true,
      async write(chunk, encoding, callback) {
        batch.push(chunk);
        if(batch.length>=100){
         await candidateRepository.createMany(batch.slice());
         batch=[]; }
        callback();
      }
    });

  await pipelineAsync(
      readableFile,
      csvParser({separator:';'}),
      convertLine,
      saveCsvInDB
    );
    if(batch.length>0){
      await candidateRepository.createMany(batch.slice());
    }
  
  },
  createCandidate: async (candidate: any) => {
    return await candidateRepository.create(candidate);
  }
};

export default candidateService;